import React from 'react';

const ActionButton = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`mx-1.5 my-1 h-fit rounded-md border p-1.5 font-source-code-pro text-sm md:mx-2 md:my-1.5 md:p-2  ${className}`}
    >
      {children}
    </button>
  );
};

export default ActionButton;
