'use client';
import React, { useEffect, useState } from 'react';
import ReactImageGallery from 'react-image-gallery';

import { useNextSanityImage } from 'next-sanity-image';
import Creatable from 'react-select';
import { addToCart } from '@/lib/redux/cart.slice';
import { client } from '@/lib/sanity/sanityClient';
import '../image-gallery.css';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';

const ProductSlugClient = ({ product }) => {
  const { title, available, description, images, _id } = product;
  const dispatch = useAppDispatch();
  const [selectedQuantity, setSelectedQuantity] = useState({
    value: 1,
    label: 1,
  });
  const [selectedSize, setSelectedSize] = useState(available[0].size);

  const cart = useAppSelector((state) => state.cart);
  const { items } = cart;

  const imageProps = useNextSanityImage(client, images[0]);
  const imageProps2 = useNextSanityImage(client, images[1]);

  const productPrice = available[0].price;
  const galleryImages = [imageProps, imageProps2]
    .map((img) => {
      if (!img || !img.src) return null;
      return {
        original: img.src,
        originalHeight: 1000,
        originalWidth: 1000,
        thumbnailHeight: 1000,
        thumbnailWidth: 1000,
        thumbnail: img.src,
        originalAlt: description,
        thumbnailAlt: description,
      };
    })
    .filter((img) => !!img);

  const amountOfAvailableInSize = available.find(
    (avail) => avail.size === selectedSize || available[0].size
  );

  const itemFromCart = items.find(
    (item) => item.productId === _id && item.size === selectedSize
  );
  const alreadyQuantityInCart = itemFromCart?.quantity || 0;

  const amountOptions = Array.from(
    { length: amountOfAvailableInSize?.amount - alreadyQuantityInCart },
    (_, i) => ({
      value: i + 1,
      label: i + 1,
    })
  );

  const handleAddToCart = () => {
    if (selectedQuantity.value === 0) return;
    dispatch(
      addToCart({
        productId: _id,
        productTitle: title,
        quantity: selectedQuantity.value,
        size: selectedSize,
      })
    );
    setSelectedQuantity({
      value: 1,
      label: 1,
    });
  };

  const showSizeOptions = available.some((avail) => avail.size !== 'N/A');

  return (
    <>
      <div className='flex w-full justify-center p-2 md:w-1/2'>
        <ReactImageGallery
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          items={galleryImages}
        />
      </div>
      <div className='flex w-full flex-col p-2 md:w-1/2'>
        <div className='mb-4 flex flex-col md:mb-10'>
          <h1 className='text-4xl'>{title}</h1>
          <p className='text-lg'>
            {productPrice}
            <span className='text-sm'>kr</span>
          </p>
        </div>
        {showSizeOptions && (
          <div className='mb-10'>
            <p className='mb-2 text-sm'>
              Selected size: <span>{selectedSize}</span>
            </p>
            <div className='flex flex-row'>
              {available.map((avail) => {
                const { size } = avail;
                const borderStyle =
                  selectedSize === size ? 'border-primary' : '';
                return (
                  <button
                    className={`border ${borderStyle} mr-2 rounded-md px-5 py-3 transition duration-300 hover:border-primaryLight`}
                    onClick={() => {
                      if (selectedSize === size) return;
                      setSelectedSize(size);
                    }}
                    key={size}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>
        )}
        <hr className='mb-10 border-whitish opacity-50' />
        <div className='mb-4 flex flex-row justify-between md:mb-10'>
          <Creatable
            value={selectedQuantity}
            styles={{
              control: (provided) => ({
                ...provided,
                width: '100px',
                backgroundColor: '#F7FAFC',
              }),
            }}
            onChange={(option) => setSelectedQuantity(option)}
            className='text-blackish'
            options={amountOptions}
          />

          <button
            disabled={selectedQuantity.value === 0}
            onClick={(e) => {
              e.preventDefault();
              // scroll to top smoothly
              window.scrollTo({ top: 0, behavior: 'smooth' });

              handleAddToCart();
            }}
            className={` w-48 rounded-sm bg-primary px-2 py-1 text-center text-sm text-whitish  transition duration-300 hover:bg-primaryLight md:px-4 md:py-2 md:text-base`}
          >
            Add to Cart
          </button>
        </div>
        <div className='flex flex-row whitespace-pre-line	'>
          <p className='break-words	'>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductSlugClient;
