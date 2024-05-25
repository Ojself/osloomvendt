import React from 'react';

import groq from 'groq';
import { client } from '@/lib/sanity/sanityClient';
import OrdersClient from '@/components/orders/OrdersClient';

const query = groq`*[_type == 'order' && reference == $reference ] {
  _id,
  reference,
  vippsStatus,
  email,
  paymentType,
}`;

const getData = async () => {
  const { reference } = context.query;
  const params = { reference };
  try {
    const orders = await client.fetch(query, params);

    const anonymizedOrders = orders.map((order) => {
      order.email = anonymizeEmail(order.email);
      return order;
    });

    const sanityOrder = anonymizedOrders[0];

    return {
      props: {
        sanityOrder,
      },
    };
  } catch (e) {
    return {
      sanityOrder: {},
    };
  }
};

const Orders = async () => {
  const sanityOrder = await getData();
  return <OrdersClient sanityOrder={sanityOrder} />;
};

export default Orders;
