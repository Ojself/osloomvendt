import React from 'react';
import groq from 'groq';
import { client } from '@/lib/sanity/sanityClient';
import CartClient from '@/components/shop/CartClient';

const query = groq`*[_type == 'product'] | order(order asc) {
                  _id,
                  _updatedAt,
                  title,
                  slug,
                  description,
                  images,
                  available,
                  additionalFreight
               }`;
const getData = async () => {
  const products = await client.fetch(query);
  return products;
};

const Cart = async () => {
  const products = await getData();

  return <CartClient products={products} />;
};

export default Cart;
