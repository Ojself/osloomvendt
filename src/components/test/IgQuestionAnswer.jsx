'use client';
import React, { useState } from 'react';

const IgQuestionAnswer = ({ q, a, onClick }) => {
  const [clicked, setClicked] = useState(false);
  const animation = clicked ? 'opacity-0' : '';
  return (
    <button
      onClick={() => {
        setClicked(true);
        return onClick(a);
      }}
    >
      <div
        className={`${animation} m-1 flex w-44 transform flex-col rounded-2xl text-center font-source-sans font-medium duration-300 md:m-2 md:w-72`}
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
