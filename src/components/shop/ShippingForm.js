'use client';
import React from 'react';
import { progresses } from './CheckoutClient';

const ShippingForm = ({
  handleSubmit,
  onSubmit,
  register,
  setValue,
  ignoreEnterOnKeyDown,
  setCheckoutProgress,
}) => {
  return (
    <div className='flex flex-col '>
      <form
        className='flex flex-col'
        onSubmit={handleSubmit(onSubmit)}
        onKeyDown={ignoreEnterOnKeyDown}
      >
        <h3 className='text-2xl'>Delivery Options</h3>
        <label
          onClick={() => setValue('shipping', 'posten')}
          className='my-4 flex rounded-md border border-primaryLight px-2 py-4'
          htmlFor='posten'
        >
          <input {...register('shipping')} type='radio' value='posten' />
          <div className='ml-2 flex flex-1 justify-between'>
            <p>Posten (standard mail)</p>
            <p>Free (for now)</p>
          </div>
        </label>

        <div className=' flex w-full flex-col justify-between text-sm md:flex-row'>
          <button
            className=' mt-2 w-full whitespace-nowrap border py-4 md:mt-0 md:w-48  lg:w-52'
            onClick={() => setCheckoutProgress(progresses.INFORMATION)}
          >
            {'<'} Return to information
          </button>
          <input
            value='Continue'
            className='mt-2 w-full bg-shopred py-4 text-whitish md:mt-0 md:w-48 lg:w-52'
            type='submit'
          />
        </div>
      </form>
    </div>
  );
};

export default ShippingForm;
