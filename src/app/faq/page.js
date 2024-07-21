import React from 'react';
import Link from 'next/link';

import { SOCIALS } from '@/utils/consts';
import ApiKeyLink from '@/components/faq/ApiKeyLink';
import Container from '@/components/layout/Container';

const mockResponse = {
  status: 200,
  data: {
    events: [
      {
        name: 'Some Event name',
        startDate: new Date(Date.now()),
        location: 'Venue name',
        url: 'https://www.example.com',
      },
      {
        name: 'Some Other Event name',
        startDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        location: 'Another Venue name',
        url: 'https://www.example.com',
      },
      '... more events',
    ],
  },
};

const FAQ = () => {
  return (
    <Container>
      <div className='mb-6'>
        <h1 className='mb-12 font-source-sans text-2xl font-bold sm:text-3xl md:text-5xl'>
          FAQ
        </h1>
      </div>
      <section className='mb-12'>
        <h2 className='mb-4 mt-6 text-lg font-bold sm:text-xl md:text-3xl'>
          <span>Q</span>: How do I get my event on the list?
        </h2>
        <p className='pl-6 text-lg'>
          <span className='font-bold'>A</span>: We take care of everything and
          scrape data from various sources on the internet to ensure that our
          list is as comprehensive as possible. We understand that event
          organizers have a lot to juggle, and we want to provide a hassle-free
          experience. However, if we missed your event while scraping or if you
          want to manually suggest an event, you can send us a DM on{' '}
          <a
            className='underline hover:font-bold'
            target='_blank'
            rel='noopener noreferrer'
            href={SOCIALS.instagram}
          >
            Instagram
          </a>{' '}
          or suggest it through our{' '}
          <Link className='underline' href='/suggest'>
            <span className='hover:font-bold '>website</span>
          </Link>
          , and we&apos;ll review it for inclusion in our listings.
        </p>
        <h2 className='mb-4 mt-6 text-lg font-bold sm:text-xl md:text-3xl'>
          <span>Q</span>: Where are the forest raves?
        </h2>
        <p className='pl-6 text-lg'>
          <span className='font-bold'>A</span>: We do not list forest raves
          unless the event organizers wants to. Often the forest raves are a bit
          more secretive and are not always announced on social media. A good
          way to find out about them is to ask around in the community.
        </p>
        <h2 className='mb-4 mt-6 text-lg font-bold sm:text-xl md:text-3xl'>
          <span>Q</span>: Can I use your data?
        </h2>
        <p className='pl-6 text-lg'>
          <span className='font-bold'>A</span>: Yes! All our data is available
          through our open API for free. Reach out to{' '}
          <a className='hover:underline' href='contact:hei@osloomvendt.no'>
            <>
              <span>hei</span>
              <span>@</span>
              <span>osloomvendt</span>
              <span>.</span>
              <span>com</span>
            </>
          </a>{' '}
          to get your free API  key and simply do a GET request to the following
          URL: <ApiKeyLink />
        </p>
        <div className='rounded-lg bg-black p-4 text-white'>
          <h1 className='text-sm text-tertiary'>GET</h1>
          <h1 className='text-sm'>
            API Response <span className='text-green-500'>(200)</span>
          </h1>
          <pre>{JSON.stringify(mockResponse, null, 2)}</pre>
        </div>
        <h2 className='mb-4 mt-6 text-lg font-bold sm:text-xl md:text-3xl'>
          <span>Q</span>: How can I support the event guide?
        </h2>
        <p className='pl-6 text-lg'>
          <span className='font-bold'>A</span>: We appreciate any support you
          can give to help us continue providing the best event guide possible.
          We offer financial support options through both{' '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={SOCIALS.patreon}
            className='underline hover:font-bold'
          >
            Patreon
          </a>{' '}
          and{' '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={SOCIALS.paypal}
            className='underline hover:font-bold'
          >
            Paypal
          </a>
          , but please know that the guide will always be free for everyone to
          use. Additionally, simply liking our posts on Instagram and sharing
          them with your friends can go a long way in helping us spread the word
          about our guide. So, if you enjoy using our guide and want to help us
          out, any support you can provide would be greatly appreciated.
        </p>
        <h2 className='mb-4 mt-6 text-lg font-bold sm:text-xl md:text-3xl'>
          <span>Q</span>: Can I pay to be highlighted?
        </h2>
        <p className='pl-6 text-lg'>
          <span className='font-bold'>A</span>: No
        </p>
      </section>
    </Container>
  );
};

export default FAQ;
