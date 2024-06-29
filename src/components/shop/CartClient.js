'use client';

import { changeQuantity, removeFromCart } from '@/lib/redux/cart.slice';

import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import Link from 'next/link';
import CartProductPreview from './CartProductPreview';
import { useEffect, useState } from 'react';
import EmptyCart from './EmptyCart';
import { setToProducts } from '@/lib/redux/products.slice';
import Container from '../layout/Container';

const CartClient = ({ products }) => {
  const [hydrated, isHydrated] = useState(false);
  const cart = useAppSelector((state) => state.cart);
  const existingProductsFromState = useAppSelector((state) => state.products);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!existingProductsFromState || existingProductsFromState.length === 0) {
      dispatch(setToProducts({ products }));
    }
  }, [products, cart]);
  useEffect(() => {
    isHydrated(true);
  }, []);
  const { items } = cart;

  const getProductById = (id) => {
    const item = existingProductsFromState.find((item) => item._id === id);

    return item;
  };

  const getTotalPrice = () => {
    return cart?.items?.reduce(
      (accumulator, item) =>
        accumulator +
        item.quantity * getProductById(item.productId).available[0].price,
      0
    );
  };

  const handleRemoveItem = (productId, size) => {
    dispatch(removeFromCart({ productId, size }));
  };

  const handleChangeItem = (productId, size, quantity) => {
    dispatch(changeQuantity({ productId, size, quantity }));
  };
  if (!hydrated) return null;
  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <Container>
      <div className='relative mb-6'>
        <h1 className='mb-12 text-3xl font-bold sm:text-4xl md:text-5xl'>
          CART
        </h1>
      </div>

      <div className='mb-12 '>
        <div className='mb-8'>
          <h2 className='text-lg font-semibold md:text-2xl'>
            {cart.items.length} items in your cart for {getTotalPrice()}
            kr
          </h2>
        </div>
        <div className='mb-4 flex w-full text-sm'>
          <div className='w-10/12 md:w-7/12'>Item</div>
          <div className='hidden md:flex md:w-2/12'>Quantity</div>
          <div className='hidden md:flex md:w-2/12'>Price</div>
          <div className='w-2/12 md:w-1/12'>
            {/* Empty by design - action */}
          </div>
        </div>
        <hr className='mb-10 border-whitish opacity-25' />
        <div className='flex flex-col '>
          {cart.items.map((cartItem) => {
            const { productId, size, quantity } = cartItem;
            const product = getProductById(productId);

            return (
              <CartProductPreview
                quantity={quantity}
                size={size}
                key={`${size}-${productId}`}
                product={product}
                handleRemoveItem={handleRemoveItem}
                handleChangeItem={handleChangeItem}
              />
            );
          })}
        </div>
        <hr className='my-10 w-full border-whitish opacity-25 md:hidden' />
        <div className='flex justify-end '>
          <div className='w-5/12 '>
            <hr className='mb-10 hidden w-full border-whitish opacity-25 md:flex' />
            <div className='flex justify-between'>
              <div>Subtotal</div>
              <div>{getTotalPrice()}kr</div>
            </div>
          </div>
        </div>
        <div className='mt-12 flex w-full flex-col md:flex-row md:justify-between'>
          <Link href='/shop'>
            <button className='w-full border py-2 md:w-52'>
              Back to Shopping
            </button>
          </Link>
          <Link href='/shop/checkout'>
            <button className='mt-2 w-full bg-shopredDark py-2 text-whitish duration-200 hover:bg-shopred md:mt-0 md:w-52'>
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};
export default CartClient;
