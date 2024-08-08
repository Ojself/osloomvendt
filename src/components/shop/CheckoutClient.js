'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import CheckoutProductOverview from '../../components/shop/CheckoutProductOverview';
import { useAppSelector } from '@/lib/redux/hooks';
import ChangeAddress from './ChangeAddress';
import InformationForm from './InformationForm';
import ShippingForm from './ShippingForm';
import PaymentForm from './PaymentForm';
import Container from '../layout/Container';
import Header1 from '../layout/typograhpy/Header1';
import { twMerge } from 'tailwind-merge';

export const progresses = {
  INFORMATION: 'Information',
  SHIPPING: 'Shipping',
  PAYMENT: 'Payment',
};

const CheckoutClient = () => {
  const onInformationFormSubmit = () => {
    setCheckoutProgress(progresses.SHIPPING);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onShippingFormSubmit = () => {
    setCheckoutProgress(progresses.PAYMENT);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      'billing-same-as-shipping': true,
      country: 'Norway',
      county: 'Oslo',
      shipping: 'posten',

      /* TESTING PURPOSES */
      /* email: "tormod.flesjo@gmail.com",
      name: "Tormod Flesjø",
      "streetAddress": "Gøteborggata 32",
      city: "Oslo",
      county: "Oslo",
      "zipCode": "0566",
      mobile: "98999898", */
    },
  });

  useEffect(() => {
    watch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch]);

  const [checkoutProgress, setCheckoutProgress] = useState(
    progresses.INFORMATION
  );

  const cart = useAppSelector((state) => state.cart);
  const existingProductsFromState = useAppSelector((state) => state.products);

  const getProductById = (id) => {
    const item = existingProductsFromState.find((item) => item._id === id);
    return item;
  };

  const shipping = watch('shipping');
  const country = watch('country');
  const county = watch('county');
  const city = watch('city');
  const zipCode = watch('zipCode');
  const streetAddress = watch('streetAddress');

  const ignoreEnterOnKeyDown = (e) => {
    if (e.key === 'Enter') e.preventDefault();
  };

  const shippingFee = shipping === 'posten' ? 0 : 0;

  const totalPrice =
    cart?.items?.reduce(
      (acc, item) =>
        acc + item.quantity * getProductById(item.productId).available[0].price,
      0
    ) + shippingFee;

  const shouldRenderChangeShippingAddress =
    checkoutProgress !== progresses.INFORMATION && shipping === 'posten';

  return (
    <Container>
      <div className='mb-16'>
        <Header1 className='uppercase' text='CHECKOUT' />
      </div>

      <div className='flex flex-col md:flex-row md:justify-between'>
        <section className='mb-12 flex w-full flex-col md:w-6/12'>
          <ul className='mb-6 flex'>
            {Object.values(progresses).map((progress) => {
              const isActive = progress === checkoutProgress;
              const activeTextColor = isActive ? 'text-primary' : '';
              const isNotLast = progress !== progresses.PAYMENT;

              // User should be able to click on the previous ones, but not the next ones
              const isClickable = () => {
                if (
                  checkoutProgress === progresses.SHIPPING &&
                  progress === progresses.INFORMATION
                ) {
                  return true;
                }
                if (
                  checkoutProgress === progresses.PAYMENT &&
                  (progress === progresses.INFORMATION ||
                    progress === progresses.SHIPPING)
                ) {
                  return true;
                }
                return false;
              };
              const hoverEffect = isClickable()
                ? 'hover:text-primaryLight'
                : '';

              return (
                <button
                  key={progress}
                  disabled={!isClickable()}
                  onClick={() => setCheckoutProgress(progress)}
                  className={twMerge(activeTextColor, hoverEffect, 'mr-4')}
                >
                  {progress}
                  {isNotLast && <span className='text-slate-50'> {'>'} </span>}
                </button>
              );
            })}
          </ul>

          {shouldRenderChangeShippingAddress && (
            <ChangeAddress
              country={country}
              county={county}
              zipCode={zipCode}
              streetAddress={streetAddress}
              city={city}
              onClick={() => setCheckoutProgress(progresses.INFORMATION)}
            />
          )}
          {progresses.INFORMATION === checkoutProgress && (
            <InformationForm
              handleSubmit={handleSubmit}
              ignoreEnterOnKeyDown={ignoreEnterOnKeyDown}
              onSubmit={onInformationFormSubmit}
              register={register}
              setValue={setValue}
              watch={watch}
              errors={errors}
            />
          )}
          {progresses.SHIPPING === checkoutProgress && (
            <ShippingForm
              setValue={setValue}
              handleSubmit={handleSubmit}
              ignoreEnterOnKeyDown={ignoreEnterOnKeyDown}
              onSubmit={onShippingFormSubmit}
              register={register}
              setCheckoutProgress={setCheckoutProgress}
            />
          )}

          {progresses.PAYMENT === checkoutProgress && (
            <PaymentForm
              setValue={setValue}
              handleSubmit={handleSubmit}
              ignoreEnterOnKeyDown={ignoreEnterOnKeyDown}
              onSubmit={onShippingFormSubmit}
              register={register}
              setCheckoutProgress={setCheckoutProgress}
              watch={watch}
              totalPrice={totalPrice}
              errors={errors}
            />
          )}
        </section>
        <section className='mb-12 flex h-fit w-full flex-col rounded bg-slate-800 px-2 py-4 md:w-5/12'>
          <CheckoutProductOverview
            cart={cart}
            getProductById={getProductById}
            shipping={shipping}
            totalPrice={totalPrice}
            shippingFee={shippingFee}
          />
        </section>
      </div>
    </Container>
  );
};

export default CheckoutClient;
