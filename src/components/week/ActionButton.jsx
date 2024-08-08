import React from 'react';
import { twMerge } from 'tailwind-merge';

const ActionButton = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        className,
        'mx-1.5 my-1 h-fit rounded-md border p-1.5 font-source-code-pro text-sm md:mx-2 md:my-1.5 md:p-2  '
      )}
    >
      {children}
    </button>
  );
};

export default ActionButton;
