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
const EventDateBannerOutline = ({ weekday, date, isNight }) => {
  const formattedDate = `${weekday} ${date}${addEmoji(date)}`;
  return (
    <>
      <div
        className={`sticky top-0  z-10 mt-6 flex flex-col  stroke-white stroke-2  py-2  font-source-code-pro text-lg font-bold text-primary sm:text-xl md:text-2xl lg:text-3xl`}
      >
        <motion.time
          className='flex w-fit rounded-lg px-4'
          style={{
            backdropFilter: 'blur(30px)',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}
          animate={drunkAnimation(isNight)}
        >
          {formattedDate}
        </motion.time>
      </div>
      <hr className='border border-primary' />
    </>
  );
};

export default EventDateBannerOutline;
