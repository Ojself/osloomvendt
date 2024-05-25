import React from 'react';

const Header3 = ({ text, className }) => {
  return (
    <h3
      className={`${className} text-2xl font-semibold md:text-3xl lg:text-4xl`}
    >
      {text}
    </h3>
  );
};

export default Header3;
