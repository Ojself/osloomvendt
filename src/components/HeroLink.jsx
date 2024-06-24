'use client';
import React from 'react';
import Link from 'next/link';
import currentWeekNumber from 'current-week-number';

const HeroLink = () => {
  const currentWeekNumberString = currentWeekNumber().toString();
  const currentEventUrl = `/week/${currentWeekNumberString}`;
  return (
    <Link className='w-full' href={currentEventUrl}>
      <div
        className={`pride-bg mb-20 flex h-20  w-full items-center transition duration-500 ease-in-out sm:h-36 md:h-40 lg:h-64 `}
      >
        <h1 className=' w-full select-none whitespace-nowrap text-center font-anton text-6xl  sm:text-8xl md:text-9xl lg:text-10xl'>
          OSLO OMVENDT
        </h1>
      </div>
    </Link>
  );
};

export default HeroLink;
