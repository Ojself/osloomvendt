'use client';
import currentWeekNumber from 'current-week-number';
import React from 'react';

const ApiKeyLink = () => {
  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={`https://osloomvendt.no/api/events?week=${currentWeekNumber()}?apikey=YOUR_API_KEY`}
    >
      <code className='text-wrap bg-black px-1.5 py-0.5 text-sm text-tertiary hover:text-tertiaryDark'>
        https://osloomvendt.no/api/events?week=N&apikey=YOUR_API_KEY
      </code>
    </a>
  );
};

export default ApiKeyLink;
