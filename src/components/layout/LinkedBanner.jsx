import React from 'react';
import Link from 'next/link';

const LinkedBanner = ({ href = '/', bg = 'bg-whitish' }) => {
  return (
    <Link href={href}>
      <h2
        className={`${bg} cursor-pointer select-none px-2 text-center font-anton text-2xl text-blackish sm:text-4xl md:px-4 md:text-5xl lg:px-6 lg:text-6xl`}
      >
        OSLO OMVENDT
      </h2>
    </Link>
  );
};

export default LinkedBanner;
