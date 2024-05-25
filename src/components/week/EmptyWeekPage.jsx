import Link from 'next/link';
import React from 'react';

const EmptyWeekPage = () => {
  return (
    <Link className='flex h-40 items-center justify-center' href='/'>
      <p className='text-whitish cursor-pointer text-xl underline'>ouch..</p>
    </Link>
  );
};

export default EmptyWeekPage;
