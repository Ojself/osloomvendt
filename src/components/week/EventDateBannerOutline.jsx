import Link from 'next/link';
import React from 'react';
import { FaMap } from 'react-icons/fa';

const addEmoji = (date) => {
  const emojis = {
    17.5: '🇳🇴',
    24.12: '🎅',
    31.12: '🎆',
  };
  return emojis[date] ? ` ${emojis[date]}` : '';
};
const EventDateBannerOutline = ({ weekday, date }) => {
  const formattedDate = `${weekday},${date}${addEmoji(date)}`;
  return (
    <div
      className={`sticky top-0 z-50 mt-6 flex border-b-2 border-b-primary bg-blackish py-2 pl-4 font-source-code-pro text-lg font-bold text-primary sm:text-xl md:text-2xl lg:text-3xl`}
    >
      <time>{formattedDate}</time>
      {date === '1.6' && (
        <Link
          className='my-auto ml-4 inline animate-pulse text-xl text-primaryLight hover:text-secondary '
          href='/blog/musikkfest-2024'
        >
          <FaMap />
        </Link>
      )}
    </div>
  );
};

export default EventDateBannerOutline;
