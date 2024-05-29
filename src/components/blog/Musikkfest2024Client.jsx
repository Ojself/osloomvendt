'use client';

import React, { useEffect, useRef, useState } from 'react';

const Musikkfest2024Client = ({ events }) => {
  const ref = useRef(null);
  const [iframeDimensions, setIframeDimensions] = useState({
    width: 350,
    height: 280,
  });
  useEffect(() => {
    const handleResize = () => {
      const refWidth = ref.current.offsetWidth;
      const isMobile = refWidth < 768;
      setIframeDimensions({
        width: refWidth,
        height: isMobile ? refWidth : refWidth * 0.8,
      });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const dateWithoutYear = `01.06`;
  events.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <section
        ref={ref}
        className='font-source-sans font-bold'
        id={dateWithoutYear}
      >
        {events.map((event, i) => {
          const { startDate, name, location, url, icon } = event;
          const endTime = new Date(startDate);
          endTime.setHours(endTime.getHours() + 3);
          return (
            <div key={`${url}.${i}`}>
              <div className='relative my-2 flex text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
                <a
                  className={`${location}-analytics flex grow font-source-sans transition duration-200 hover:text-primaryDark`}
                  id={`${name}-analytics`} // For google analytics
                  href={url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {icon}
                  <h3 className='ml-4 w-2/3 py-1 '>{name}</h3>
                  <h3 className='absolute right-1 top-1/2 -translate-y-1/2 rounded bg-whitish px-1 italic text-blackish md:right-3 md:px-2'>
                    {location}
                  </h3>
                </a>
              </div>
              <hr />
            </div>
          );
        })}
      </section>
      <section className='mx-auto my-12'>
        <iframe
          src='https://www.google.com/maps/d/embed?mid=1VM8tbyCc6JRlNUHoPmEhLTg_C72NrpY&ehbc=2E312F'
          className='mx-auto'
          width={iframeDimensions.width - 10}
          height={iframeDimensions.height}
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      </section>
    </>
  );
};

export default Musikkfest2024Client;
