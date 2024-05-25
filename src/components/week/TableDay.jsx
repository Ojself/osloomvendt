'use client';
import React from 'react';

import { LuCalendarRange } from 'react-icons/lu';
import ICalendarLink from 'react-icalendar-link';
import { getWeekDay } from '@/utils';
import EventDateBannerOutline from './EventDateBannerOutline';

const TableDay = ({ date, events, photoMode, calendarMode }) => {
  const weekDay = getWeekDay(date);
  const [dd, mm] = date.split('.');
  const dateWithoutYear = `${dd}.${mm}`;
  events.sort((a, b) => a.name.localeCompare(b.name));

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
            <div className='relative my-2 flex text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
              {calendarMode && !photoMode && (
                <ICalendarLink
                  className='flex h-fit flex-col items-center justify-center self-center rounded-lg p-1 text-center text-tertiary transition duration-200 hover:bg-tertiary  hover:text-blackish'
                  filename={name}
                  event={{
                    title: name,
                    startTime: startDate, //yyyyMMdd'T'HHmmss
                    endTime,
                    location: location,
                    url: url,
                  }}
                >
                  <LuCalendarRange />
                </ICalendarLink>
              )}
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
  );
};

export default TableDay;
