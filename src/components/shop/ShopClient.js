'use client';
import React, { useEffect } from 'react';
import ProductPreview from './ProductPreview';
import Container from '../layout/Container';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { addToProducts, setToProducts } from '@/lib/redux/products.slice';

const ShopClient = ({ products }) => {
  const dispatch = useAppDispatch();
  const existingProductsFromState = useAppSelector((state) => state.products);

  useEffect(() => {
    const productIds = existingProductsFromState?.map((product) => product._id);
    const newProducts = products.filter(
      (product) => !productIds?.includes(product._id)
    );
    const productsHaveUpdated = products.some(
      (product) =>
        product._updatedAt >
        existingProductsFromState?.find(
          (existingProduct) => existingProduct._id === product._id
        )?._updatedAt
    );

    if (productsHaveUpdated) {
      dispatch(setToProducts({ products: products }));
    } else if (newProducts.length > 0) {
      dispatch(addToProducts({ products: newProducts }));
    }
  }, [dispatch, products, existingProductsFromState]);

  return (
    <Container>
      <div className='mb-6'>
        <h1 className='mb-12 text-2xl font-bold sm:text-3xl md:text-5xl'>
          SHOP
        </h1>
      </div>
      <section className='mb-12'>
        <h2 className='mb-4 text-lg font-bold sm:text-xl md:text-3xl'>
          Products
        </h2>
        <ul className='grid grid-cols-1 gap-x-2 gap-y-8 md:grid-cols-2'>
          {products.map((product) => (
            <ProductPreview key={product._id} product={product} />
          ))}
        </ul>
      </section>
    </Container>
  );
};

export default ShopClient;
