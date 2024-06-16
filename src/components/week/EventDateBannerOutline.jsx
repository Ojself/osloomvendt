import React from 'react';

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
      className={`sticky top-0 z-40 mt-6 flex border-b-2 border-b-primary bg-blackish py-2 pl-4 font-source-code-pro text-lg font-bold text-primary sm:text-xl md:text-2xl lg:text-3xl`}
    >
      <time>{formattedDate}</time>
    </div>
  );
};

export default EventDateBannerOutline;
