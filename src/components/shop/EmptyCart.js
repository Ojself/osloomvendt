import Link from 'next/link';
import React from 'react';
import Container from '../layout/Container';
import Header1 from '../layout/typograhpy/Header1';

const EmptyCart = () => {
  return (
    <Container>
      <div className='relative'>
        <Link
          className='hover:text-shopred absolute -top-6 left-0 transition duration-200'
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
