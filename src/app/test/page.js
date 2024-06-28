'use client';
import IgQuestionAnswer from '@/components/test/IgQuestionAnswer';
import { useAppSelector } from '@/lib/redux/hooks';
import { redirect } from 'next/navigation';

import React from 'react';

const answers = [
  'Monument !',
  'Soria and Monument 😍',
  'Monument!',
  'Trevarefest i Lofoten 🥰🏔️',
  'Monument:)',
  'Stone Techno 🥳',
  'Butik',
  'Soria',
  'Musikkfest og Vårlys',
  'Sober beat og Insomnia',
  'Soria!',
  'Vårlys',
  'Monument',
];

const Test = () => {
  const products = useAppSelector((state) => state.products);
  const cart = useAppSelector((state) => state.cart);
  if (process.env.NODE_ENV !== 'development') {
    redirect('/');
  }
  const logReduxState = () => {
    console.log('state: \n', { products, cart });
  };
  return (
    <>
      <div className='flex flex-col items-center'>
        <p>Redux</p>
        <button className='rounded-md bg-red-500 p-4' onClick={logReduxState}>
          Log state
        </button>
      </div>
      <hr />
      <div className='flex w-full flex-row flex-wrap '>
        {answers.map((a) => (
          <IgQuestionAnswer
            key={a}
            q={'Which music festival are you attending this summer?'}
            a={a}
          />
        ))}
      </div>
    </>
  );
};

export default Test;
