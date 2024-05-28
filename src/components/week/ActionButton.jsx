import React from 'react';

const ActionButton = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`mx-1.5 h-fit rounded-md border p-2 font-source-code-pro text-sm md:mx-2  ${className}`}
    >
      {children}
    </button>
  );
};

export default ActionButton;
