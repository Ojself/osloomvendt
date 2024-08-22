import React from 'react';

import { motion } from 'framer-motion';
import { drunkAnimation } from '@/utils';
const addEmoji = (date) => {
  const emojis = {
    17.5: '🇳🇴',
    24.12: '🎅',
    31.12: '🎆',
  };
  return emojis[date] ? ` ${emojis[date]}` : '';
};
const EventDateBannerOutline = ({
  weekday,
  date,
  isNight,
  bg = 'bg-blackish',
}) => {
  const formattedDate = `${weekday},${date}${addEmoji(date)}`;
  return (
    <div
      className={`${bg} sticky top-0 z-40 mt-6 flex border-b-2 border-b-primary  py-2 pl-4 font-source-code-pro text-lg font-bold text-primary sm:text-xl md:text-2xl lg:text-3xl`}
    >
      <motion.time animate={drunkAnimation(isNight)}>
        {formattedDate}
      </motion.time>
    </div>
  );
};

export default EventDateBannerOutline;
