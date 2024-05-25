'use client';
import React from 'react';

const SocialLink = ({ href, ariaLabel, icon }) => {
  return (
    <a
      target='_blank'
      aria-label={ariaLabel}
      rel='noopener noreferrer'
      href={href}
    >
      {icon}
    </a>
  );
};

export default SocialLink;
