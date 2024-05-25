import React from 'react';
import { useNextSanityImage } from 'next-sanity-image';
import Img from 'next/image';
import { client } from '@/lib/sanity/sanityClient';

const CheckoutProductPreview = ({ product, quantity, size }) => {
  const { title, images, available } = product;
  const productPrice = available[0].price;

  const imageProps = useNextSanityImage(client, images[0]);

  delete imageProps.width;
  delete imageProps.height;

  return (
    <div className='mb-6 flex w-full flex-row md:mb-8'>
      <div className='relative flex w-2/12 '>
        <Img
          {...imageProps}
          alt={`Product image of ${title}`}
          style={{ objectFit: 'contain' }}
          fill={true}
        />
      </div>
      <div className='flex w-6/12 flex-col px-1'>
        <div className='font-bold'>{title}</div>
        <div>Size: {size}</div>
      </div>
      <div className='flex w-1/12 justify-center font-bold '>
        <p>{quantity}</p>
      </div>
      <div className='flex w-3/12 justify-end'>{productPrice}kr</div>
    </div>
  );
};

export default CheckoutProductPreview;
