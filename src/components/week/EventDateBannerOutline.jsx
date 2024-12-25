
import React, { useRef, useState, useEffect } from 'react';
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

function EventDateBannerOutline({ weekday, date, isNight }) {
  const bannerRef = useRef(null);
  const [bannerStyle, setBannerStyle] = useState({});
  const THRESHOLD = 0; const checkPosition = () => {
    if (!bannerRef.current) return;  const rect = bannerRef.current.getBoundingClientRect();
    const yPos = rect.top;   
    if (yPos <= THRESHOLD) {
      setBannerStyle({
        backdropFilter: 'blur(30px)',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      });
    } else {
      setBannerStyle({});
    }
  };
  useEffect(() => {
    
    checkPosition();  
    window.addEventListener('scroll', checkPosition);
    return () => {
      window.removeEventListener('scroll', checkPosition);
    };
  }, []);
  const formattedDate = `${weekday} ${date}${addEmoji(date)}`;
  return (
    <>
      <div
        ref={bannerRef}
        className="sticky top-0 z-10 mt-6 flex flex-col stroke-white stroke-2 py-2 font-source-code-pro text-lg font-bold text-primary sm:text-xl md:text-2xl lg:text-3xl"
      >
        <motion.time
          className="flex w-fit rounded-lg px-4"
          style={bannerStyle}
          animate={drunkAnimation(isNight)}
        >
          {formattedDate}
        </motion.time>
      </div>
      <hr className="border border-primary" />
    </>
  );
}


export default EventDateBannerOutline;
