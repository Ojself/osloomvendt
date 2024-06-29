import React from 'react';
import Creatable from 'react-select';
import { useNextSanityImage } from 'next-sanity-image';
import Img from 'next/image';
import { CiCircleRemove } from 'react-icons/ci';
import { client } from '@/lib/sanity/sanityClient';

const CartProductPreview = ({
  handleRemoveItem,
  handleChangeItem,
  product,
  quantity,
  size,
}) => {
  const { title, images, _id, available } = product;
  const productPrice = available[0].price;

  const amountOfAvailableInSize = product.available.find(
    (avail) => avail.size === size
  );

  const amountOptions = Array.from(
    { length: amountOfAvailableInSize?.amount + 1 },
    (_, i) => ({
      value: i,
      label: i,
    })
  );
  const imageProps = useNextSanityImage(client, images[0]);

  delete imageProps.width;
  delete imageProps.height;

  return (
    <div className='mb-6 flex w-full flex-row md:mb-8'>
      <div className='relative w-2/12 md:w-2/12 '>
        <Img
          {...imageProps}
          alt={`Product image of ${title}`}
          style={{ objectFit: 'contain' }}
          fill={true}
        />
      </div>
      <div className='flex w-9/12 flex-col md:w-5/12'>
        <div className='font-bold'>{title}</div>
        <div>Size: {size}</div>
      </div>
      <div className='hidden md:flex md:w-2/12'>
        <Creatable
          value={{ value: quantity, label: quantity }}
          styles={{
            control: (provided) => ({
              ...provided,
              width: '100px',
              backgroundColor: '#F7FAFC',
            }),
          }}
          onChange={(newQuantity) =>
            handleChangeItem(_id, size, newQuantity.value)
          }
          className='text-blackish'
          options={amountOptions}
        />
      </div>
      <div className='hidden md:flex md:w-2/12'>{productPrice}kr</div>
      <div className='flex w-1/12 '>
        <button
          className='text-xl text-yellow-400 hover:text-yellow-500'
          onClick={() => handleRemoveItem(_id, size)}
        >
          <CiCircleRemove />
        </button>
      </div>
    </div>
  );
};

export default CartProductPreview;
