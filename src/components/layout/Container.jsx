import React from 'react';

const Container = ({ children, size = 'md', className = '' }) => {
  const maxWidth =
    size === 'md'
      ? 'max-w-[900px]'
      : size === 'sm'
        ? 'max-w-[700px]'
        : 'max-w-[1200px]';
  return (
    <div className={`${className} mx-auto w-full ${maxWidth}`}>{children}</div>
  );
};

export default Container;
