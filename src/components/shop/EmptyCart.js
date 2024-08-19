import Link from 'next/link';
import React from 'react';
import Container from '../layout/Container';
import Header1 from '../layout/typograhpy/Header1';

const EmptyCart = () => {
  return (
    <Container>
      <div className='relative'>
        <Link
          className='absolute -top-6 left-0 transition duration-200 hover:text-shopred'
          href='/shop'
        >
          {'<'} Back
        </Link>
        <Header1 text='Your cart is empty!' />
      </div>
    </Container>
  );
};

export default EmptyCart;
