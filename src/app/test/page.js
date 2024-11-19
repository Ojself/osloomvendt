'use client';
import { useAppSelector } from '@/lib/redux/hooks';
import { signIn, useSession } from 'next-auth/react';
import React from 'react';
import { redirect } from 'next/navigation';
import Embed from '@/components/embed/Embed';

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
  const { data: session } = useSession();
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
              onClick={() => signIn('instagram')}
              className='rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-4 py-2 font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:from-purple-500 hover:via-pink-600 hover:to-red-600'
            >
              Sign in instagram
            </button>
          </>
        )}
      </div>
      <hr className='my-10' />
      <div className='flex flex-col items-center'>
        <p>React Player</p>
        <div className='w-[600px] max-w-full p-4'>
          <Embed
            embed={{
              url: 'https://soundcloud.com/sofa-beats-1/sofacast-18-nico-tober?si=a28a70f8ef5e4d66a2ef0194151a6347&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
              title: 'String',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Test;
