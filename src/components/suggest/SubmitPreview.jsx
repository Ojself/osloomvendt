'use client';
import React from 'react';
import EventDateBannerOutline from '../week/EventDateBannerOutline';

const SubmitPreview = ({ fakeEvents, date, weekDay }) => {
  const [dd, mm] = date.split('.');
  const dateWithoutYear = `${dd}.${mm}`;

  return (
    <section className='font-source-sans font-bold' id={dateWithoutYear}>
      <EventDateBannerOutline weekday={weekDay} date={dateWithoutYear} />

      {fakeEvents.map((event, i) => {
        const { startDate, name, location, url } = event;
        const endTime = new Date(startDate);
        endTime.setHours(endTime.getHours() + 3);
        return (
          <div key={`${url}.${i}`}>
            <div className='relative my-2 flex font-source-sans text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
              <a
                className={`${location}-analytics flex grow font-source-sans transition duration-200 hover:text-primaryDark`}
                id={`${name}-analytics`} // For google analytics
                href={url}
                target='_blank'
                rel='noopener noreferrer'
              >
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
export default SubmitPreview;
