'use client';

import React, { useState } from 'react';

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

const IgQuestionAnswer = ({ q, a, onClick }) => {
  const [clicked, setClicked] = useState(false);
  const bounce = Math.round(Math.random() * 10) > 8 ? 'animate-wiggle' : '';
  const rotation = rotations[Math.floor(Math.random() * rotations.length)];

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
        className={`${animation} ${bounce} hover:${rotation}  m-1 flex w-44 transform flex-col  rounded-2xl text-center font-source-sans font-medium duration-300 hover:rotate-3 md:m-2 md:w-72`}
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
