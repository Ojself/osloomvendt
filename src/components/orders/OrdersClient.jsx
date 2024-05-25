'use client';
import React from 'react';
import axios from 'axios';

import LoadingSpinner from '../LoadingSpinner';
import SuccessBox from './SuccessBox';
import FailBox from './FailBox';
import { useRouter } from 'next-nprogress-bar';
import { emptyCart } from '@/lib/redux/cart.slice';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';

const OrdersClient = ({ sanityOrder }) => {
  const [loading, setLoading] = useState(true);
  const [vippsError, setVippsError] = useState(false);
  const [vippsOrder, setVippsOrder] = useState(null);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const cartId = cart?.metadata.cartId;

  const { reference } = router.query;

  useEffect(() => {
    const getPaymentInformation = async () => {
      setLoading(true);
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
        <SuccessBox sanityOrder={sanityOrder} vippsOrder={vippsOrder} />
      )}
      {vippsError && <FailBox />}
    </>
  );
};

export default OrdersClient;
