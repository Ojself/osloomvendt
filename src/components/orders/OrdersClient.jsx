'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import LoadingSpinner from '../LoadingSpinner';
import FailBox from './FailBox';
import { emptyCart } from '@/lib/redux/cart.slice';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import groq from 'groq';

import { sanityFetch } from '@/lib/sanity/sanityClient';
import { anonymizeEmail } from '@/utils';
import VippsOrder from './VippsOrder';

const query = groq`*[_type == 'order' && reference == $reference ] {
  _id,
  reference,
  vippsStatus,
  email,
  paymentType,
}`;

const getSanityOrder = async (reference) => {
  try {
    const orders = await sanityFetch({
      query: query,
      params: reference,
      tags: ['order'],
    });

    const anonymizedOrders = orders.map((order) => {
      order.email = anonymizeEmail(order.email);
      return order;
    });

    const sanityOrder = anonymizedOrders[0];

    return sanityOrder;
  } catch (e) {
    return {
      sanityOrder: {},
    };
  }
};

const OrdersClient = () => {
  const searchParams = useSearchParams();
  const reference = searchParams.get('reference');
  const [loading, setLoading] = useState(true);
  const [vippsOrder, setVippsOrder] = useState(null);
  const [vippsError, setVippsError] = useState(false);

  const [sanityOrder, setSanityOrder] = useState(null);
  const [sanityError, setSanityError] = useState(false);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const cartId = cart?.metadata.cartId;

  useEffect(() => {
    const getPaymentInformation = async () => {
      setLoading(true);
      try {
        const data = await getSanityOrder(reference);

        setSanityOrder(data);
      } catch (e) {
        console.error(e);
        setSanityError(true);
      }
      try {
        const accessTokenData = await axios.post('/api/vipps/accesstoken');
        const { access_token } = accessTokenData.data;
        const payment = await axios.post('/api/vipps/get-payment', {
          access_token,
          reference: reference,
        });
        setVippsOrder(payment.data);
      } catch (e) {
        console.error(e);
        setVippsError(true);
      }

      setLoading(false);
    };
    if (reference) {
      getPaymentInformation();
    }
    const shouldEmptyCart = cartId === reference;
    if (shouldEmptyCart) {
      dispatch(emptyCart());
    }
  }, [reference, cartId]);

  return (
    <>
      {loading && <LoadingSpinner />}
      {vippsOrder && (
        <VippsOrder sanityOrder={sanityOrder} vippsOrder={vippsOrder} />
      )}
      {vippsError && <FailBox />}
    </>
  );
};

export default OrdersClient;
