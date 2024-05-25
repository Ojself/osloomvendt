'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { NextSeo } from 'next-seo';
import Container from '@/components/layout/Container';
import Header1 from '@/components/layout/typograhpy/Header1';

const photos = [
  { src: '/imgs/2023wrapped/0_events_listed.jpg' },
  { src: '/imgs/2023wrapped/1_venues_covered.jpg' },
  { src: '/imgs/2023wrapped/3_most_traffic.jpg' },
  {
    src: '/imgs/2023wrapped/4_most_clicked_club_venues.jpg',
  },
  {
    src: '/imgs/2023wrapped/5_most_clicked_event_venues.jpg',
  },
  {
    src: '/imgs/2023wrapped/6_most_clicked_club_concepts.jpg',
  },
  {
    src: '/imgs/2023wrapped/7_most_clicked_collective.jpg',
  },
  { src: '/imgs/2023wrapped/8_most_clicked_duo.jpg' },
  {
    src: '/imgs/2023wrapped/9_most_clicked_solo_dj.jpg',
  },
  { src: '/imgs/2023wrapped/12_followers_growth.jpg' },
  { src: '/imgs/2023wrapped/10_events_listed.jpg' },
  { src: '/imgs/2023wrapped/11_events_listed.jpg' },
];

const Wrapped2023 = () => {
  return (
    <>
      <NextSeo
        title={`2023 Wrapped - Oslo Omvendt`}
        description={'2023 in a snapshot!'}
        canonical={`https://osloomvendt.no/2023-wrapped`}
        openGraph={{
          title: `2023 Wrapped - Oslo Omvendt`,
          description: '2023 in a snapshot!',
          url: `https://osloomvendt.no/2023-wrapped`,
          locale: 'en-US',
          siteName: 'Oslo Omvendt',
        }}
      />

      <Container>
        <div className='mb-2 mt-8'>
          <Link href='/week'>
            <button className='ml-2 w-full border py-2 text-left font-source-code-pro text-primary hover:underline md:w-52'>
              <AiOutlineArrowLeft className='mr-1 inline' />
              Back to events
            </button>
          </Link>
          <Header1
            text='2023 wrapped'
            className='text-center font-anton uppercase text-blackish'
          />
        </div>
        {photos.map((photo) => {
          const { src } = photo;
          return (
            <div
              key={src}
              className='relative mb-8 flex items-center justify-center'
            >
              <Image
                height={500}
                width={500}
                src={src}
                className='cursor-pointer'
                alt=''
                onClick={() => window.open(src, '_blank')}
                placeholder={'blurDataURL' in photo ? 'blur' : undefined}
              />
            </div>
          );
        })}
      </Container>
    </>
  );
};

export default Wrapped2023;
