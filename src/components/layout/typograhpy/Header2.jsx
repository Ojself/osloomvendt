import React from 'react';

const Header2 = ({ text, className }) => {
  return (
    <h2
      className={`${className}  text-3xl font-semibold md:text-4xl lg:text-5xl`}
    >
      {text}
    </h2>
  );
};

export default Header2;
