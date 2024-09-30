import React from 'react';

import Header2 from '../layout/typograhpy/Header2';
import Header3 from '../layout/typograhpy/Header3';

export const HeroDateBanner = ({ events, weekNumber }) => {
  const firstEventThatStartsOnSaturday = events.find(
    (event) => event.startDate.getDay() === 6
  );
  const monthName = firstEventThatStartsOnSaturday
    ? firstEventThatStartsOnSaturday?.startDate.toLocaleDateString('en-US', {
        month: 'long',
      })
    : events[0].startDate.toLocaleDateString('en-US', {
        month: 'long',
      });

  const currentYear = new Date().getFullYear().toString();
  const yearOfFirstEvent = events[0].startDate.getFullYear().toString();

  const userIsViewingCurrentYear = yearOfFirstEvent === currentYear;

  return (
    <div className='flex flex-col font-bold'>
      <div className='flex'>
        <Header2 className='uppercase' text={monthName} />
        {!userIsViewingCurrentYear && (
          <span className='text-sm font-bold text-orange-400'>
            {yearOfFirstEvent}
          </span>
        )}
      </div>
      <Header3 text={`[WEEK ${weekNumber}]`} />
    </div>
  );
};
