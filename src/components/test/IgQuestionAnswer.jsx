'use client';

import React, { useState } from 'react';

const blurs = ['blur-[1px]', 'blur-[1.5px]', 'blur-[2px]', 'blur-[3px]'];

const rotations = [
  'rotate-1',
  'rotate-2',
  'rotate-3',
  'rotate-6',
  '-rotate-1',
  '-rotate-2',
  '-rotate-3',
  '-rotate-6',
];

const getBlur = (i) => {
  if (i > 21) return blurs[3];
  if (i > 19) return blurs[2];
  if (i > 17) return blurs[1];
  if (i > 15) return blurs[0];
  return '';
};

const IgQuestionAnswer = ({ q, a, onClick, i }) => {
  const [clicked, setClicked] = useState(false);
  const bounce = Math.round(Math.random() * 10) > 8 ? 'animate-wiggle' : '';
  const rotation = rotations[Math.floor(Math.random() * rotations.length)];
  const blur = getBlur(i);
  const animation = clicked ? 'opacity-0' : '';
  return (
    <button
      onClick={() => {
        setClicked(true);
        setTimeout(() => setClicked(false), 1000);
        return onClick(a);
      }}
    >
      <div
        className={`${animation} ${bounce} hover:${rotation} ${blur}  bl m-1 flex w-44 transform flex-col rounded-2xl text-center font-source-sans font-medium  duration-300 md:m-2 md:w-72`}
      >
        <div className='rounded-t-2xl bg-[#262626] px-1 py-3 text-xs text-white md:px-3 md:py-5 md:text-base'>
          {q}
        </div>
        <div className='min-h-10 rounded-b-2xl bg-white px-3 py-5 text-sm text-[#262626] md:min-h-11 md:px-5 md:py-7 md:text-xl'>
          {a}
        </div>
      </div>
    </button>
  );
};
export default IgQuestionAnswer;
