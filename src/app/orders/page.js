import React, { Suspense } from 'react';
import OrdersClient from '@/components/orders/OrdersClient';

const Orders = () => {
  return (
    <Suspense>
      <OrdersClient />
    </Suspense>
  );
};

export default Orders;
