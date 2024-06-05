'use client';
import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import Creatable from 'react-select';

import countries from '../../data/countries.json';
import norwegian_counties from '../../data/norwegian_counties.json';

import FormErrorMessage from '../FormErrorMessage';
import PayPalIcon from './PayPalIcon';
import VippsIcon from './VippsIcon';
import VippsWrapper from './VippsWrapper';
import Link from 'next/link';
import { progresses } from './CheckoutClient';
import { useAppSelector } from '@/lib/redux/hooks';

const PayPalWrapper = ({ totalPrice, cart, redirectToPage }) => {
  return (
    <div className='mt-2 w-full pt-1 md:mt-0 md:w-48 lg:w-52'>
      <PayPalScriptProvider
        options={{
          currency: 'NOK',
          'client-id': 'sb',
          //"AWIb8wqCW7LEBEqzjzOiKcWZgMD_h1s4HkRlle76qMC9XcNhy-eBE9PWhd1aGIYV5n4oUJYv0JdydQmZ",
        }}
      >
        <PayPalButtons
          style={{
            color: 'black',
            height: 55,
            label: 'pay',
            tagline: false,
            layout: 'horizontal',
          }}
          fundingSource='paypal'
          createOrder={(data, actions) => {
            return actions.order.create({
              application_context: {
                shipping_preference: 'NO_SHIPPING',
              },
              purchase_units: [
                {
                  amount: {
                    //value: totalPrice,
                    value: 1,
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            try {
              await axios.post('/api/order', {
                reference: cart.metadata.cartId,
                amount: totalPrice,
                paymentType: 'PAYPAL',
                /* customer information */
                ...customer,
              });
            } catch (err) {
              console.error('Error creating order', err);
            }
            return actions.order.capture().then((details) => {
              redirectToPage(
                `https://www.osloomvendt.no/orders/${cart.metadata.cartId}`
              );
            });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

const CreditCardWrapper = ({ totalPrice }) => {
  const [clicked, setClicked] = useState(false);
  const bg = clicked ? 'bg-slate-50' : 'bg-transparent';
  return (
    <div className={`my-2 w-full rounded md:mt-0  ${bg} `}>
      <PayPalScriptProvider
        options={{
          currency: 'NOK',
          'client-id':
            'AWIb8wqCW7LEBEqzjzOiKcWZgMD_h1s4HkRlle76qMC9XcNhy-eBE9PWhd1aGIYV5n4oUJYv0JdydQmZ',
        }}
      >
        <PayPalButtons
          onClick={() => setClicked(true)}
          onCancel={() => setClicked(false)}
          style={{
            color: 'black',
            height: 55,
            label: 'pay',
            tagline: false,
            layout: 'horizontal',
          }}
          fundingSource='card'
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: totalPrice,
                  },
                },
              ],
              application_context: {
                shipping_preference: 'NO_SHIPPING',
              },
            });
          }}
          onApprove={async (data, actions) => {
            const sanityRes = await axios.post('/api/order', {
              reference: cart.metadata.cartId,
              amount: totalPrice,
              paymentType: 'PAYPAL',
              /* customer information */
              ...customer,
            });
            return actions.order.capture().then(function (details) {
              alert(
                'Transaction completed by ' +
                  details.payer.name.given_name +
                  '!'
              );
            });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

const PaymentForm = ({
  handleSubmit,
  onSubmit,
  register,
  setValue,
  setCheckoutProgress,
  watch,
  totalPrice,
  ignoreEnterOnKeyDown,
  errors,
}) => {
  const customer = {
    email: watch('email'),
    name: watch('name'),
    streetAddress: watch('streetAddress'),
    city: watch('city'),
    zipCode: watch('zipCode'),
    mobile: watch('mobile'),
    country: watch('country'),
    county: watch('county'),
  };
  const termsOfSaleAccepted = watch('terms-of-sale');
  const paymentMethod = watch('payment');
  const customerCountry = watch('country');
  const billingSameAsShipping = watch('billing-same-as-shipping');
  const vippsPaymentShouldBeDisabled = customerCountry !== 'Norway';

  const cart = useAppSelector((state) => state.cart);

  const redirectToPage = (url) => {
    if (window) {
      window.location.href = url;
    } else {
      console.error('window not defined');
    }
  };

  const openInNewTab = (url) => {
    if (window) {
      window.open(url, '_blank');
    } else {
      console.error('window not defined');
    }
  };

  const handleError = (message) => {
    console.error(message);
  };

  const formattedCountries = countries.map((c) => {
    return {
      value: c,
      label: c,
    };
  });
  const customerSelectedCountry = watch('country');

  const formattednorwegian_counties = norwegian_counties.map((c) => {
    return {
      value: c,
      label: c,
    };
  });
  const customerSelectedCounty = watch('shipping-county');
  const countyInputIsDropdown = customerSelectedCountry === 'Norway';

  return (
    <>
      <div className='flex flex-col'>
        <form
          className='flex flex-col accent-tertiary'
          onSubmit={handleSubmit(onSubmit)}
          onKeyDown={ignoreEnterOnKeyDown}
        >
          <h3 className='text-2xl'>Billing address</h3>

          <label
            className='mb-6 flex px-2 py-2'
            htmlFor='billing-same-as-shipping'
          >
            <input
              className='mr-2 h-5 w-5 '
              type='checkbox'
              {...register('billing-same-as-shipping')}
            />
            <p
              onClick={() =>
                setValue('billing-same-as-shipping', !billingSameAsShipping)
              }
            >
              Same as shipping address.
            </p>
          </label>

          <h3 className='text-2xl'>Terms of Sale</h3>

          <label className='mb-6 flex px-2 py-2' htmlFor='terms-of-sale'>
            <input
              className='mr-2 h-5 w-5 '
              type='checkbox'
              {...register('terms-of-sale')}
            />
            <p>
              I accept the{' '}
              <Link
                rel='noopener noreferrer'
                target='_blank'
                className='font-semibold hover:underline'
                href='/terms-of-sale'
              >
                Terms Of Sale
              </Link>
            </p>
          </label>

          {!billingSameAsShipping && (
            <>
              <div className='mb-4 flex flex-col'>
                <label htmlFor='shipping-email'>E-mail address</label>
                <input
                  type='text'
                  className='rounded bg-whitish py-2 pl-2 text-blackish placeholder-slate-500'
                  id='shipping-email'
                  placeholder={'E-mail address'}
                  {...register('shipping-email', {
                    required: { value: true, message: 'Field is required' },
                  })}
                />
                <FormErrorMessage error={errors.email} />
              </div>
              <div className='mb-4 flex flex-col'>
                <label htmlFor='shipping-name'>Full name</label>
                <input
                  type='text'
                  className='rounded bg-whitish py-2 pl-2 text-blackish placeholder-slate-500'
                  id='shipping-name'
                  placeholder={'Full name'}
                  {...register('shipping-name', {
                    required: { value: true, message: 'Field is required' },
                  })}
                />
                <FormErrorMessage error={errors.name} />
              </div>
              <div className='mb-4 flex flex-col'>
                <label htmlFor='shipping-streetAddress'>Street address</label>
                <input
                  type='text'
                  className='rounded bg-whitish py-2 pl-2 text-blackish placeholder-slate-500'
                  id='shipping-streetAddress'
                  placeholder={'Street adpdress'}
                  {...register('shipping-streetAddress', {
                    required: { value: true, message: 'Field is required' },
                  })}
                />
                <FormErrorMessage error={errors['streetAddress']} />
              </div>
              <div className='mb-4 flex flex-col'>
                <label htmlFor='shipping-city'>City</label>
                <input
                  type='text'
                  className='rounded bg-whitish py-2 pl-2 text-blackish placeholder-slate-500'
                  id='shipping-city'
                  placeholder={'City'}
                  {...register('shipping-city', {
                    required: { value: true, message: 'Field is required' },
                  })}
                />
                <FormErrorMessage error={errors.city} />
              </div>
              <div className='mb-4 flex justify-between'>
                <div className='w-1/3'>
                  <label htmlFor='shipping-country'>Country</label>
                  <Creatable
                    value={{
                      value: customerSelectedCountry,
                      label: customerSelectedCountry,
                    }}
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        border: 'none',
                        backgroundColor: '#F7FAFC',
                      }),
                    }}
                    onChange={(country) => {
                      if (country.value === 'Norway') {
                        setValue('county', 'Oslo');
                      } else {
                        setValue('county', '');
                      }
                      setValue('country', country.value);
                    }}
                    className='text-blackish'
                    options={formattedCountries}
                  />
                  <FormErrorMessage error={errors['country']} />
                </div>
                <div className='w-1/4'>
                  <label htmlFor='shipping-state'>State</label>
                  {countyInputIsDropdown ? (
                    <Creatable
                      value={{
                        value: customerSelectedCounty,
                        label: customerSelectedCounty,
                      }}
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          border: 'none',
                          backgroundColor: '#F7FAFC',
                        }),
                      }}
                      onChange={(county) =>
                        setValue('shipping-county', county.value)
                      }
                      className='text-blackish'
                      options={formattednorwegian_counties}
                    />
                  ) : (
                    <input
                      type='text'
                      style={{ height: '38px' }}
                      className='w-full rounded bg-whitish py-2 pl-2 text-blackish placeholder-slate-500'
                      id='shipping-county'
                      placeholder={'State'}
                      {...register('shipping-county', {
                        required: { value: true, message: 'Field is required' },
                      })}
                    />
                  )}
                  <FormErrorMessage error={errors['county']} />
                </div>
                <div className='flex w-1/4 flex-col'>
                  <label htmlFor='shipping-zipCode'>Zip code</label>
                  <input
                    style={{ height: '38px' }}
                    type='text'
                    className='rounded bg-whitish pl-2 text-blackish placeholder-slate-500'
                    id='shipping-zipCode'
                    placeholder={'Zip code'}
                    {...register('shipping-zipCode', {
                      required: { value: true, message: 'Field is required' },
                    })}
                  />
                  <FormErrorMessage error={errors['zipCode']} />
                </div>
              </div>
            </>
          )}

          <h3 className='text-2xl'>Payment Method</h3>
          <label
            onClick={() => {
              if (vippsPaymentShouldBeDisabled || !termsOfSaleAccepted) return;
              setValue('payment', 'vipps');
            }}
            className={`border ${
              vippsPaymentShouldBeDisabled || !termsOfSaleAccepted
                ? 'border-gray-500'
                : 'border-primaryLight'
            } my-4 flex rounded-md px-2 py-4`}
            htmlFor='vipps'
          >
            {!vippsPaymentShouldBeDisabled && termsOfSaleAccepted && (
              <input {...register('payment')} type='radio' value='vipps' />
            )}
            <div className='ml-2 flex flex-1 justify-between'>
              <p>{`Vipps${
                vippsPaymentShouldBeDisabled
                  ? ' (Disabled in your country)'
                  : ''
              }`}</p>
              <VippsIcon height={28} />
            </div>
          </label>

          <label
            onClick={() => {
              if (!termsOfSaleAccepted) return;
              setValue('payment', 'paypal');
            }}
            className={`border ${
              !termsOfSaleAccepted ? 'border-gray-500' : 'border-primaryLight'
            } my-4 flex rounded-md px-2 py-4`}
            htmlFor='paypal'
          >
            {termsOfSaleAccepted && (
              <input {...register('payment')} type='radio' value='paypal' />
            )}

            <div className='ml-2 flex flex-1 justify-between'>
              <p>PayPal</p>
              <PayPalIcon height={28} />
            </div>
          </label>

          <div className='flex w-full flex-col justify-between text-sm md:flex-row'>
            <button
              className='mt-2 w-full border py-4 md:mt-0 md:w-48 lg:w-52'
              onClick={() => setCheckoutProgress(progresses.SHIPPING)}
            >
              {'<'} Return to Shipping
            </button>
            {paymentMethod === 'paypal' && termsOfSaleAccepted && (
              <PayPalWrapper
                cart={cart}
                redirectToPage={redirectToPage}
                totalPrice={totalPrice}
              />
            )}
            {paymentMethod === 'vipps' && termsOfSaleAccepted && (
              <VippsWrapper
                cart={cart}
                totalPrice={totalPrice}
                customer={customer}
                redirectToPage={redirectToPage}
                openInNewTab={openInNewTab}
                handleError={handleError}
              />
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default PaymentForm;
