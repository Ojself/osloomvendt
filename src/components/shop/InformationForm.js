import React from 'react';

import Creatable from 'react-select';
import countries from '../../data/countries.json';
import norwegian_counties from '../../data/norwegian_counties.json';
import FormErrorMessage from '../FormErrorMessage';
import { ignoreUnwantedKeysForNumberInput } from '../../utils';
import { useRouter } from 'next-nprogress-bar';

const InformationForm = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
  ignoreEnterOnKeyDown,
  setValue,
  watch,
}) => {
  const router = useRouter();

  const formattedCountries = countries.map((c) => {
    return {
      value: c,
      label: c,
    };
  });
  const userSelectedCountry = watch('country');

  const formattednorwegian_counties = norwegian_counties.map((c) => {
    return {
      value: c,
      label: c,
    };
  });
  const userSelectedCounty = watch('county');

  const countyInputIsDropdown = userSelectedCountry === 'Norway';

  return (
    <div className='mb-4 flex flex-col'>
      <form
        autoComplete='on'
        className='flex flex-col'
        onSubmit={handleSubmit(onSubmit)}
        onKeyDown={ignoreEnterOnKeyDown}
      >
        <div className='mb-4 flex flex-col'>
          <label htmlFor='email'>E-mail address</label>
          <input
            type='text'
            className='rounded bg-whitish py-2 pl-2 text-blackish placeholder-slate-500'
            id='email'
            placeholder={'E-mail address'}
            {...register('email', {
              required: { value: true, message: 'Field is required' },
            })}
          />
          <FormErrorMessage error={errors.email} />
        </div>
        <div className='mb-4 flex flex-col'>
          <label htmlFor='name'>Full name</label>
          <input
            type='text'
            className='rounded bg-whitish py-2 pl-2 text-blackish placeholder-slate-500'
            id='name'
            placeholder={'Full name'}
            {...register('name', {
              required: { value: true, message: 'Field is required' },
            })}
          />
          <FormErrorMessage error={errors.name} />
        </div>
        <div className='mb-4 flex flex-col'>
          <label htmlFor='streetAddress'>Street address</label>
          <input
            type='text'
            className='rounded bg-whitish py-2 pl-2 text-blackish placeholder-slate-500'
            id='streetAddress'
            placeholder={'Street adpdress'}
            {...register('streetAddress', {
              required: { value: true, message: 'Field is required' },
            })}
          />
          <FormErrorMessage error={errors['streetAddress']} />
        </div>
        <div className='mb-4 flex flex-col'>
          <label htmlFor='city'>City</label>
          <input
            type='text'
            className='rounded bg-whitish py-2 pl-2 text-blackish placeholder-slate-500'
            id='city'
            placeholder='City'
            {...register('city', {
              required: { value: true, message: 'Field is required' },
            })}
          />
          <FormErrorMessage error={errors.city} />
        </div>
        <div className='mb-4 flex justify-between'>
          <div className='w-1/3'>
            <label htmlFor='country'>Country</label>
            <Creatable
              value={{
                value: userSelectedCountry,
                label: userSelectedCountry,
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
            <label htmlFor='state'>State</label>
            {countyInputIsDropdown ? (
              <Creatable
                value={{
                  value: userSelectedCounty,
                  label: userSelectedCounty,
                }}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    border: 'none',
                    backgroundColor: '#F7FAFC',
                  }),
                }}
                onChange={(county) => setValue('county', county.value)}
                className='text-blackish'
                options={formattednorwegian_counties}
              />
            ) : (
              <input
                type='text'
                style={{ height: '38px' }}
                className='w-full rounded bg-whitish py-2 pl-2 text-blackish placeholder-slate-500'
                id='county'
                placeholder={'State'}
                {...register('county', {
                  required: { value: false },
                })}
              />
            )}
            <FormErrorMessage error={errors['county']} />
          </div>
          <div className='flex w-1/4 flex-col'>
            <label htmlFor='zipCode'>Zip code</label>
            <input
              style={{ height: '38px' }}
              type='text'
              className='rounded bg-whitish pl-2 text-blackish placeholder-slate-500'
              id='zipCode'
              placeholder={'Zip code'}
              {...register('zipCode', {
                required: { value: true, message: 'Field is required' },
              })}
            />
            <FormErrorMessage error={errors['zipCode']} />
          </div>
        </div>
        <div className='mb-4 flex flex-col'>
          <label htmlFor='mobile'>Phone number</label>
          <input
            type='number'
            className='rounded bg-whitish py-2 pl-2 text-blackish placeholder-slate-500'
            id='mobile'
            onScroll={(e) => e.preventDefault()}
            placeholder={'Phone number'}
            onKeyDown={ignoreUnwantedKeysForNumberInput}
            {...register('mobile', {
              required: { value: true, message: 'Field is required' },
            })}
          />
          <FormErrorMessage error={errors.email} />
        </div>

        <div className='mt-6 flex w-full flex-col justify-between text-sm md:flex-row'>
          <button
            className='mt-2 w-full border py-4 md:mt-0 md:w-48 lg:w-52'
            onClick={(e) => {
              e.preventDefault();
              router.push('/shop');
            }}
          >
            {'<'} Return to shop
          </button>
          <input
            value='Continue'
            className='bg-shopred mt-2 w-full py-4 md:mt-0 md:w-48 lg:w-52'
            type='submit'
          />
        </div>
      </form>
    </div>
  );
};

export default InformationForm;
