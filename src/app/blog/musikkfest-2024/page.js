import React from 'react';

import Musikkfest2024Client from '@/components/blog/Musikkfest2024Client';
import Container from '@/components/layout/Container';
import Header1 from '@/components/layout/typograhpy/Header1';
import {
  TbCircleLetterAFilled,
  TbCircleLetterBFilled,
  TbCircleLetterCFilled,
  TbCircleLetterDFilled,
  TbCircleLetterEFilled,
  TbCircleLetterFFilled,
  TbCircleLetterGFilled,
  TbCircleLetterHFilled,
  TbCircleLetterIFilled,
  TbCircleLetterJFilled,
} from 'react-icons/tb';
import Link from 'next/link';

const iconStyle = 'bg-white text-[#1466FF] rounded-full my-auto';

const events = [
  {
    location: 'Utsikten',
    url: 'https://www.facebook.com/events/750289996932133/',
    name: 'Back2Basic Musikkens dag 2024 (public)',
    startDate: '2024-06-01T10:00:00.000Z',
    icon: <TbCircleLetterCFilled className={iconStyle} />,
  },
  {
    location: 'MS Bjørvika',
    url: 'https://www.facebook.com/events/445430307977947/',
    name: 'Båtfest med Husvogna',
    startDate: '2024-06-01T11:00:00.000Z',
    icon: <TbCircleLetterDFilled className={iconStyle} />,
  },
  {
    startDate: '2024-06-01T09:00:00.000Z',
    location: 'Torshovdalen',
    url: 'https://www.facebook.com/events/452874777117363/',
    name: 'EPiPHANY OSLO | Musikkfest',
    icon: <TbCircleLetterAFilled className={iconStyle} />,
  },
  {
    name: 'Extra Delicious - Musikkfest Tøyenparken ',
    startDate: '2024-06-01T21:00:00.000Z',
    location: 'Tøyenparken ',
    url: 'https://www.facebook.com/events/335046652952079/',
    icon: <TbCircleLetterBFilled className={iconStyle} />,
  },
  {
    location: 'Storgata 26',
    url: 'https://fb.me/e/4s403k1QO',

    name: 'Musikkfest 2024 // Storgata 26',
    startDate: '2024-06-01T20:00:00.000Z',
    icon: <TbCircleLetterHFilled className={iconStyle} />,
  },
  {
    location: 'Dattera til Hagen',
    url: 'https://www.facebook.com/events/3627925854137301/',
    name: 'MUSIKKFEST 2024 // Dattera til Hagen',
    startDate: '2024-06-01T20:00:00.000Z',
    icon: <TbCircleLetterEFilled className={iconStyle} />,
  },

  {
    name: 'Musikkfest x Sous-Vide Records',
    startDate: '2024-06-01T10:00:00.000Z',
    location: 'Brød og sirkus',
    url: 'https://www.facebook.com/events/1821354228374091/',
    icon: <TbCircleLetterIFilled className={iconStyle} />,
  },
  {
    name: 'Streetbackboys x Musikkfest',
    startDate: '2024-06-01T12:00:00.000Z',
    location: 'Rockefeller',
    url: 'https://www.facebook.com/events/339357902468371/',
    icon: <TbCircleLetterGFilled className={iconStyle} />,
  },
  {
    url: 'https://www.facebook.com/events/7266751620119593/',

    name: 'SUBS AND WUBS MUSIKKFEST 2024',
    startDate: '2024-06-01T20:00:00.000Z',
    location: 'Kampen Park',
    icon: <TbCircleLetterBFilled className={iconStyle} />,
  },
  {
    startDate: '2024-06-01T20:00:00.000Z',
    location: 'Eventyrbrua',
    url: 'https://www.facebook.com/events/765298949118404/',
    name: 'Uteklubb // Musikkfest 2024',
    icon: <TbCircleLetterFFilled className={iconStyle} />,
  },
  {
    name: 'Extra Delicious - After Hours Pres. Kozy (CA)',
    startDate: '2024-06-01T21:00:00.000Z',
    location: 'Pakkhuset',
    url: 'https://www.facebook.com/events/840994817908487/',
    icon: <TbCircleLetterJFilled className={iconStyle} />,
  },
];

const Musikkfest2024 = () => {
  return (
    <Container className='mt-10 px-2'>
      <Header1 className='text-center' text='MUSIKKFEST 2024' />
      <Link className='mb-10 px-1' href='/week/22'>
        <p className='source-code-pro-font text-center text-whitish hover:underline'>
          Missing something? See all 42 events{' '}
          <span className='underline'> here </span>
        </p>
      </Link>
      <Musikkfest2024Client events={events} />
    </Container>
  );
};

export default Musikkfest2024;
