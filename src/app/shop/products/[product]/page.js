import React from 'react';
import groq from 'groq';
import Link from 'next/link';

import ProductSlugClient from '@/components/shop/products/ProductSlugClient';
import { sanityFetch } from '@/lib/sanity/sanityClient';
import JsonLDProduct from '@/components/jsonld/JsonLDProduct';

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

export async function generateMetadata({ params }) {
  const product = await getData(params.product);

  const { title, description } = product;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: 'https://i.imgur.com/rO9yY4J.png',
    },
  };
}

export async function generateStaticParams() {
  const tags = ['product'];
  const products = await sanityFetch({
    query: pathsQuery,
    tags,
  });

  return products.map((product) => ({ product }));
}
const getData = async (paramsProduct) => {
  const tags = ['product'];
  const products = await sanityFetch({
    query: productsQuery,
    params: { paramsProduct },
    tags,
  });
  return products[0];
};

const Product = async ({ params }) => {
  const product = await getData(params.product);

  return (
    <>
      <div className='relative mb-10 mt-8 flex w-full flex-col justify-between font-source-code-pro sm:w-5/6 md:mb-14 md:w-3/4 md:flex-row lg:w-2/3 xl:w-1/2 2xl:w-5/12'>
        <Link
          className='absolute -top-9 left-10 hover:text-shopred'
          href='/shop'
        >
          {'<'} Back
        </Link>
        <ProductSlugClient product={product} />
      </div>
      {product._id !== '09efe99a-7023-48d4-a522-3d95217fa5b2' && (
        <JsonLDProduct product={product} />
      )}
    </>
  );
};

export default Product;
