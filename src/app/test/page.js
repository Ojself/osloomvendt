'use client';
import IgQuestionAnswer from '@/components/test/IgQuestionAnswer';
import { useAppSelector } from '@/lib/redux/hooks';

import { signIn, useSession } from 'next-auth/react';

import React, { useLayoutEffect } from 'react';

import { redirect } from 'next/navigation';

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

const Test = ({ searchParams }) => {
  const testParam = searchParams?.test;
  const { data: session } = useSession();
  const products = useAppSelector((state) => state.products);
  const cart = useAppSelector((state) => state.cart);

  useLayoutEffect(() => {
    if (process.env.NODE_ENV !== 'development' && testParam !== 'true') {
      redirect('/');
    }
  }, [testParam]);
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
      <hr className='my-10' />
      <div className='flex w-full flex-row flex-wrap '>
        {answers.map((a) => (
          <IgQuestionAnswer
            key={a}
            q={'Which music festival are you attending this summer?'}
            a={a}
          />
        ))}
      </div>
      <hr className='my-10' />
      <div className='flex flex-col items-center'>
        <p>Auth</p>
        {session ? (
          <>
            Signed in as {session.user.email} <br />
            <button onClick={() => signOut()}>Sign out Instagram</button>
          </>
        ) : (
          <>
            Not signed in <br />
            <button
              onClick={() =>
                signIn('instagram', {
                  callbackUrl: 'https://www.osloomvendt.no/',
                  redirect_uri: 'https://www.osloomvendt.no/',
                })
              }
              className='rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-4 py-2 font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:from-purple-500 hover:via-pink-600 hover:to-red-600'
            >
              Sign in instagram
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Test;
