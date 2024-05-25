import Link from 'next/link';
import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const iconStyle = 'cursor-pointer text-base md:text-xl';
const linkStyle = 'flex flex-col items-center hover:text-slate-200';
const pStyle = 'text-xs text-whitish';

const NavigationArrows = ({ previousWeekHref, nextWeekHref }) => {
  return (
    <div className='mt-4 flex w-40 justify-between uppercase'>
      <Link className={`${linkStyle} pl-1`} href={previousWeekHref}>
        <AiOutlineArrowLeft className={iconStyle} />
        <p className={pStyle}>Prev</p>
      </Link>
      <Link className={`${linkStyle} pr-1`} href={nextWeekHref}>
        <AiOutlineArrowRight className='cursor-pointer text-base md:text-xl' />
        <p className={pStyle}>Next</p>
      </Link>
    </div>
  );
};

export default NavigationArrows;
