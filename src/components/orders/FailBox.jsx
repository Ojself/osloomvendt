import Link from 'next/link';
import React from 'react';
import { BiError } from 'react-icons/bi';

const FailBox = ({}) => {
  return (
    <section className='mt-36 flex items-center justify-center rounded-lg bg-whitish p-6 shadow-2xl'>
      <div className='flex flex-col text-center'>
        <div className='flex justify-center'>
          <BiError className='text-8xl' />
        </div>
        <div className='mb-2'>
          <h1 className='text-4xl font-bold text-error'>
            Something went horribly, horribly wrong!
          </h1>
        </div>
        <div>
          <p>But don&apos;t worry, we&apos;re working on solving your issue!</p>
          <p>
            Send us an email at hei@osloomvendt.no if you have any questions!
          </p>
        </div>
        <div className='mt-4 w-fit self-center rounded-lg border border-primary hover:border-primaryLight hover:bg-gray-200'>
          <Link href='/week'>
            <p className='px-4 py-2'>Take me back to the events!</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FailBox;
