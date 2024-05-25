import React from 'react';

const Header4 = ({ text, className }) => {
  return (
    <h4 className={`${className} text-lg font-semibold sm:text-xl md:text-2xl`}>
      {text}
    </h4>
  );
};

export default Header4;
