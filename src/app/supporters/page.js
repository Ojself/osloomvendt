import { SOCIALS } from '@/utils/consts';

import React from 'react';
import Container from '@/components/layout/Container';

const Supporters = () => {
  return (
    <Container>
      <div className='mb-6'>
        <h1 className='mb-24 text-2xl font-bold sm:text-3xl md:text-5xl'>
          Thank you!
        </h1>
        <p className='my-6 text-base sm:text-lg md:text-xl'>
          We are deeply appreciative of the individuals and organizations who
          support Oslo Omvendt through{' '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='underline hover:font-bold'
            href={SOCIALS.patreon}
          >
            Patreon
          </a>{' '}
          and{' '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='underline hover:font-bold'
            href={SOCIALS.paypal}
          >
            Paypal
          </a>
          .
        </p>
      </div>
      <section className='mb-24 mt-16'>
        <h2 className='mb-4 text-xl font-bold sm:text-2xl md:text-4xl'>
          <span>✨</span> Premium Sponsor
          <span className='ml-1 text-sm font-thin'>NOK 890/month</span>
        </h2>
        <ul className='list-disc pl-6 text-lg'>
          <li className='text-xs italic'>None here yet</li>
        </ul>
      </section>
      <section className='mb-24'>
        <h2 className='mb-4 text-xl font-bold sm:text-2xl md:text-4xl'>
          <span>🖤</span> Top Supporter
          <span className='ml-1 text-sm font-thin'>NOK 399/month</span>
        </h2>
        <ul className='texl-lg cursor-default list-disc pl-6 md:text-xl  '>
          <li className='mb-2 text-primary hover:text-primaryLight'>
            <a
              href='https://www.instagram.com/local.phil/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Filip Kolber
            </a>
          </li>
          <li className='mb-2 text-primary hover:text-primaryLight'>
            <a
              href='https://www.instagram.com/klubbsafari/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Klubbsafari
            </a>
          </li>
        </ul>
      </section>
      <section className='mb-24'>
        <h2 className='mb-4 text-xl font-bold sm:text-2xl md:text-4xl'>
          <span>💃</span> Supporter
          <span className='ml-1 text-sm font-thin'>NOK 89/month</span>
        </h2>
        <ul className='texl-lg cursor-default list-disc pl-6 md:text-xl  '>
          <li className='mb-2 text-primary hover:text-primaryLight'>
            <a
              href='https://www.instagram.com/pij.kat/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Pijus Katlauskas
            </a>
          </li>
        </ul>
      </section>
      <section className='mb-24'>
        <h2 className='mb-4 text-xl font-bold sm:text-2xl md:text-4xl'>
          <span>🫶</span> Supporter
          <span className='ml-1 text-sm font-thin'>NOK 39/month</span>
        </h2>
        <ul className='texl-lg cursor-default list-disc pl-6 md:text-xl  '>
          <li className='mb-2 text-primary hover:text-primaryLight'>
            <a
              href='https://www.goplen.dev/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Marcus Goplen
            </a>
          </li>
        </ul>
      </section>
      <section className='mb-20'>
        <h2 className='mb-4 text-xl font-bold sm:text-2xl md:text-4xl'>
          <span>☄️</span> Previous supporters
        </h2>
        <p className='mb-4 text-sm'>
          We&apos;re forever thankful to the people that have previously
          supported Oslo Omvendt.
        </p>
        <ul className='texl-lg cursor-default list-disc pl-6 md:text-xl  '>
          <li className='mb-2 text-primary hover:text-primaryLight'>Liza</li>
        </ul>
      </section>

      {/* <section className='mb-20'>
            <h2 className='text-xl sm:text-2xl md:text-4xl font-bold mb-4'>
              <span>💙</span> Donations
            </h2>
            <ul className='list-disc cursor-default pl-6 texl-lg md:text-xl text-primary '>
              <li className='mb-2 hover:text-primaryLight'>
                <a
                  href='https://www.instagram.com/local.phil/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  
                </a>
                <span className='ml-1 text-sm font-thin text-white'>
                  NOK 399
                </span>
              </li>
            </ul>
          </section> */}
      <section className='text-xs italic'>
        <p>This list gets updated the first of every month.</p>
      </section>
    </Container>
  );
};

export default Supporters;
