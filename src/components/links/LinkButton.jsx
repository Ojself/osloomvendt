import Link from 'next/link';
import React from 'react';

const LinkButton = ({ href, large, children }) => {
  const isInternal = href.startsWith('/');
  const padding = large ? 'py-4' : 'py-3';
  const className = `${padding} cursor-pointer duration-200 mb-4 flex w-full justify-center rounded-xl border-2 border-linkGray bg-linkGray px-6 text-whitish transition ease-in-out hover:bg-gray-200 hover:text-linkGray focus:bg-gray-200 focus:text-linkGray`;
  if (isInternal) {
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  }
  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      className={className}
    >
      {children}
    </a>
  );
};

export default LinkButton;
