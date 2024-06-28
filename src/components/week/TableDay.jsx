'use client';
import React from 'react';
import { getWeekDay } from '@/utils';
import EventDateBannerOutline from './EventDateBannerOutline';

const TableDay = ({ date, events, photoMode }) => {
  const weekDay = getWeekDay(date);
  const [dd, mm] = date.split('.');
  const dateWithoutYear = `${dd}.${mm}`;

  return (
    <section className='font-source-sans font-bold' id={dateWithoutYear}>
      {!photoMode && (
        <EventDateBannerOutline weekday={weekDay} date={dateWithoutYear} />
      )}
      {events.map((event, i) => {
        const { startDate, name, location, url } = event;
        const endTime = new Date(startDate);
        endTime.setHours(endTime.getHours() + 3);
        return (
          <div key={`${url}.${i}`}>
            <div className='relative my-2 flex text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl'>
              <a
                className={`${location}-analytics flex grow font-source-sans transition duration-200 hover:text-primaryDark`}
                id={`${name}-analytics`} // For google analytics
                href={url}
                target='_blank'
                rel='noopener noreferrer'
              >
                {photoMode && (
                  <time className='my-auto ml-1  md:ml-2'>
                    {dateWithoutYear}
                  </time>
                )}
                <div className='ml-4 w-2/3 py-1'>
                  <h3 className='w-fit '>{name}</h3>
                </div>
                <div className='absolute right-1 top-1/2 -translate-y-1/2  md:right-3 '>
                  <h3 className='rounded bg-whitish px-1 italic text-blackish md:px-2'>
                    {location}
                  </h3>
                </div>
              </a>
            </div>
            <hr />
          </div>
        );
      })}
    </section>
  );
};

export default TableDay;
