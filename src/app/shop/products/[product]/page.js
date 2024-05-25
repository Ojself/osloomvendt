import React from 'react';
import groq from 'groq';
import Link from 'next/link';

import ProductSlugClient from '@/components/shop/products/ProductSlugClient';
import { client } from '@/lib/sanity/sanityClient';

const productsQuery = groq`*[_type == 'product' && slug.current == $paramsProduct] {
  _id,
  title,
  description,
  overview,
  slug,
  images,
  available
}`;

const pathsQuery = groq`*[_type == 'product' && defined(slug.current)][].slug.current`;

export async function generateStaticParams() {
  const products = await client.fetch(pathsQuery);
  return products.map((product) => ({ product: product }));
}
const getData = async (paramsProduct) => {
  const products = await client.fetch(productsQuery, { paramsProduct });
  return products[0];
};

const Product = async ({ params }) => {
  const product = await getData(params.product);

  return (
    <div className='relative mb-10 mt-8 flex w-full flex-col justify-between font-source-code-pro sm:w-5/6 md:mb-14 md:w-3/4 md:flex-row lg:w-2/3 xl:w-1/2 2xl:w-5/12'>
      <Link className='hover:text-shopred absolute -top-9 left-10' href='/shop'>
        {'<'} Back
      </Link>
      <ProductSlugClient product={product} />
    </div>
  );
};

export default Product;
