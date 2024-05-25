import ShopClient from '@/components/shop/ShopClient';
import { client } from '@/lib/sanity/sanityClient';
import groq from 'groq';
import React from 'react';

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

export async function getData() {
  const products = await client.fetch(query);

  return products;
}

const Shop = async () => {
  const data = await getData();
  return <ShopClient products={data} />;
};

export default Shop;
