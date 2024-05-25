'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useAppSelector } from '@/lib/redux/hooks';

const getItemsCount = (cart) => {
  return cart?.items?.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );
};

const NavBarCart = () => {
  const [hydrated, isHydrated] = useState(false);
  const cart = useAppSelector((state) => state.cart);
  const [shouldBounce, setShouldBounce] = useState(false);

  const cartNumber = getItemsCount(cart);
  useEffect(() => {
    isHydrated(true);
  }, []);

  useEffect(() => {
    if (cartNumber > 0) {
      setShouldBounce(true);
      setTimeout(() => {
        setShouldBounce(false);
      }, 1500);
    }
  }, [cartNumber, cart]);

  if (!cartNumber || cartNumber === 0) return null;
  if (!hydrated) return null;
  return (
    <div>
      <Link className='relative flex' href='/shop/cart'>
        <div
          className='text-md absolute bottom-5 left-6 z-10 rounded-sm bg-shopred px-2 font-semibold text-whitish
            '
        >
          {cartNumber}
        </div>
        <FiShoppingCart
          className={`${
            shouldBounce ? 'animate-bounce' : ''
          } mr-4 text-4xl text-primary hover:text-primaryLight`}
        />
      </Link>
    </div>
  );
};

export default NavBarCart;
