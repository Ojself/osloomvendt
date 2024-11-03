'use client';
import React from 'react';
import Link from 'next/link';
import currentWeekNumber from 'current-week-number';

const HeroLink = () => {
  const currentWeekNumberString = currentWeekNumber().toString();
  const currentYear = new Date().getFullYear();
  const currentEventUrl = `/d/${currentYear}/${currentWeekNumberString}`;
  return (
    <Link className='w-full' href={currentEventUrl}>
      <div
        className={`mb-10 flex h-32 w-full items-center  text-whitish transition duration-300 ease-in-out hover:bg-whitish hover:text-blackish sm:h-36 md:h-40 lg:h-64 `}
      >
        <h1 className='w-full select-none whitespace-nowrap text-center font-anton text-5xl sm:text-8xl md:text-9xl lg:text-10xl'>
          OSLO OMVENDT
        </h1>
      </div>
    </Link>
  );
};

export default HeroLink;
