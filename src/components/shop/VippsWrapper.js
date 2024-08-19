import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import crypto from 'crypto';
import { generateNewCartId } from '@/lib/redux/cart.slice';
import { useAppDispatch } from '@/lib/redux/hooks';
import { twMerge } from 'tailwind-merge';

const VippsWrapper = ({
  redirectToPage,
  openInNewTab,
  cart,
  customer,
  totalPrice,
  handleError,
}) => {
  const [accessToken, setAccessToken] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const vippsFormattedMobile =
    customer.mobile.length === 8 ? `47${customer.mobile}` : customer.mobile;
  useEffect(() => {
    dispatch(generateNewCartId());
    if (!accessToken) {
      handleAccessToken();
    }
  }, [accessToken]);

  const handleAccessToken = async () => {
    setLoading(true);
    try {
      const res = await axios.post('/api/vipps/accesstoken');
      setAccessToken(res.data.access_token);
    } catch (e) {
      handleError(e?.message);
    }
    setLoading(false);
  };

  const handleCreatePayment = async () => {
    if (!accessToken) {
      return handleError('Missing accesstoken');
    }
    setLoading(true);
    try {
      const payload = {
        reference: cart.metadata.cartId,
        amount: totalPrice,
        paymentType: 'VIPPS',
        boughtProducts: cart.items.map((item) => {
          return {
            _ref: item.productId,
            _type: 'reference',
            _key: crypto.randomBytes(16).toString('hex'),
          };
        }),
        /* customer information */
        ...customer,
      };

      await axios.post('/api/order', payload);

      /* const articleTitles = cart.items
        .map((item) => `${item.productTitle} ${item.size || ''}`)
        .join(', ');
      const vippsRes = await axios.post('/api/vipps/create-payment', {
        value: totalPrice,
        articleTitles,
        phoneNumber: vippsFormattedMobile,
        access_token: accessToken,
        reference: cart.metadata.cartId,
      });
      await axios.post('/api/notify/slack', {
        notificationType: 'new_purchase',
        data: cart.metadata.cartId,
      });

      // openInNewTab(vippsRes.data.redirectUrl);
      redirectToPage(vippsRes.data.redirectUrl); */
      setLoading(false);
    } catch (e) {
      setLoading(false);
      handleError(JSON.stringify(e?.message));
    }
  };

  return (
    <button
      style={{ background: '#FF5B24' }}
      disabled={loading}
      className={twMerge(
        'mt-2 h-full w-full py-4 text-base md:mt-0 md:w-48 lg:w-52 ',
        loading ? 'text-gray-500' : 'text-white'
      )}
      onClick={handleCreatePayment}
    >
      {loading ? (
        <AiOutlineLoading3Quarters className='m-auto animate-spin' />
      ) : (
        <p>Vipps</p>
      )}
    </button>
  );
};

export default VippsWrapper;
