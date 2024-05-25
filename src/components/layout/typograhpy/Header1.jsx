import React from 'react';

const Header1 = ({ text, className }) => {
  return (
    <h1 className={`${className}  text-4xl font-bold md:text-5xl lg:text-6xl`}>
      {text}
    </h1>
  );
};

export default Header1;
