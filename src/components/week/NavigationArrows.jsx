import Link from 'next/link';
import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { twMerge } from 'tailwind-merge';

const iconStyle = 'cursor-pointer text-base md:text-xl';
const linkStyle = 'flex flex-col items-center hover:text-slate-200';
const pStyle = 'text-xs text-whitish';

const NavigationArrows = ({ previousWeekHref, nextWeekHref }) => {
  return (
    <div className='mt-4 flex w-32 justify-between uppercase md:w-40'>
      <Link className={twMerge(linkStyle, 'pl-1')} href={previousWeekHref}>
        <AiOutlineArrowLeft className={iconStyle} />
        <p className={pStyle}>Prev week</p>
      </Link>
      <Link className={twMerge(linkStyle, 'pr-1')} href={nextWeekHref}>
        <AiOutlineArrowRight className='cursor-pointer text-base md:text-xl' />
        <p className={pStyle}>Next week</p>
      </Link>
    </div>
  );
};

export default NavigationArrows;
