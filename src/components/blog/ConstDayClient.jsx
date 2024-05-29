'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import LinkedBanner from '../layout/LinkedBanner';

const ConstDayClient = ({ events }) => {
  const [iframeDimensions, setIframeDimensions] = useState({
    width: 400,
    height: 300,
  });
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 90, behavior: 'smooth' });
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setIframeDimensions({
        width: Math.min(window.innerWidth - 2),
        height: Math.min(window.innerHeight - 2),
      });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const dateWithoutYear = '17.05';
  return (
    <>
      <div className='relative h-72 w-full'>
        <Image
          alt={`17th May banner`}
          className=' absolute w-full object-cover '
          fill={true}
          src='/imgs/banner.png'
        />
      </div>
      <div className='container flex flex-col items-center justify-center'>
        <h1 className='w-full whitespace-nowrap text-center font-anton text-5xl font-bold text-[#EA463C] sm:text-7xl md:text-8xl lg:text-9xl '>
          17. MAI I OSLO
        </h1>
        <Link className='mb-10 px-1' href='/week/20'>
          <p className='text-center font-source-code-pro text-black hover:underline'>
            Missing something? See all 41 events{' '}
            <span className='underline'> here </span>
          </p>
        </Link>
        <div className=' max-w-[880px]' id={dateWithoutYear}>
          {events.map((event, i) => {
            const { name, location, url } = event;
            return (
              <div key={`${url}.${i}`}>
                <a
                  href={url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='my-2 flex grow font-source-sans  text-xs text-black transition duration-200 hover:text-primary sm:text-sm md:text-base lg:text-lg xl:text-xl '
                >
                  <div className='flex w-1/4 items-center justify-start '>
                    <h3 className=' text-bg-slate-50 flex h-fit items-center rounded px-2 italic '>
                      {location}
                    </h3>
                  </div>
                  <div className='ml-4 w-full'>
                    <h3 className='text-left '>{name}</h3>
                  </div>
                </a>

                <hr />
              </div>
            );
          })}
        </div>
      </div>
      <div className='mt-14'>
        <h1 className='mb-10 w-full whitespace-nowrap text-center font-anton text-xl font-bold uppercase text-black sm:text-2xl md:text-3xl lg:text-4xl'>
          Kart over årets folketog
        </h1>
      </div>
      <div>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m76!1m12!1m3!1d11472.63668835157!2d10.724093429424777!3d59.91266601159568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m61!3e2!4m5!1s0x46416c2c8b5bff9d%3A0xe681a05ce2f4b609!2sOlaf%20Bulls%20plass%2C%20Drammensveien%2C%20Oslo!3m2!1d59.9125983!2d10.7111684!4m5!1s0x46416e6433784157%3A0x54b712babae9f724!2sIngensteds%2C%20Brenneriveien%2C%20Oslo!3m2!1d59.9199908!2d10.7527689!4m5!1s0x46416f341d452d43%3A0x1b9a6b99456223d0!2sBaba%20bar%2C%20Hausmanns%20gate%2C%20Oslo!3m2!1d59.9169123!2d10.7560016!4m5!1s0x46416e6108304397%3A0x75dea3f7971ed3fa!2sPrindsen%20Hage%2C%20Christian%20Krohgs%20gate%2C%20Oslo!3m2!1d59.914545399999994!2d10.755598899999999!4m5!1s0x46416f54edcf0025%3A0x850146c5d36f93a!2sStorgata%2026%2C%20Storgata%2C%20Oslo!3m2!1d59.9139762!2d10.751948299999999!4m5!1s0x46416e63c6a40423%3A0xd0089947f3a85ff0!2sRockefeller%2C%20Mariboes%20gate%2C%20Oslo!3m2!1d59.916225!2d10.7502943!4m5!1s0x46416e63a5a13bab%3A0x2d2cfbc171ddd17b!2sThe%20Villa%20Oslo%20Dancing%2C%20M%C3%B8llergata%2023-25%2C%200179%20Oslo!3m2!1d59.915697699999996!2d10.7486353!4m5!1s0x46416fa805874b45%3A0x43009d3a89c04e26!2sOtoto%2C%20Torggata%2C%20Oslo!3m2!1d59.9137808!2d10.7486216!4m5!1s0x46416e62b7886077%3A0xb7c586f50ce9577c!2zSsOmZ2VyLCBHcmVuc2VuLCBPc2xv!3m2!1d59.913962999999995!2d10.7434955!4m5!1s0x46416f7d9aa62ecd%3A0x39158853c36fb4ca!2sPakkhuset%20Oslo%2C%20Nedre%20Slottsgate%2C%20Oslo!3m2!1d59.909425399999996!2d10.7401369!5e0!3m2!1sno!2sno!4v1715674496400!5m2!1sno!2sno'
          width={iframeDimensions.width}
          height={iframeDimensions.height}
          style={{ border: 0 }}
          allowFullScreen=''
          className='m-auto'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
        <div className='my-12 ml-auto w-fit'>
          <LinkedBanner bg={'bg-transparent'} />
        </div>
      </div>
    </>
  );
};

export default ConstDayClient;
