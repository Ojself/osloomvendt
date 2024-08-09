import React from 'react';
import currentWeekNumber from 'current-week-number';
import groq from 'groq';

import { sanityFetch } from '@/lib/sanity/sanityClient';
import { getDateOfIsoWeek, getWeekDay } from '@/utils';
import events from '@/data/events';

import LinkedBanner from '@/components/layout/LinkedBanner';

import { redirect } from 'next/navigation';
import Header1 from '@/components/layout/typograhpy/Header1';
import Header2 from '@/components/layout/typograhpy/Header2';

const threeLinearStyle = {
  background: `linear-gradient(127deg, rgba(255,122,146,.3), rgba(255,122,146,0) 70.71%), linear-gradient(336deg, rgba(134, 255, 107,.4), rgba(134, 255, 107,0)  70.71%), linear-gradient(217deg, rgba(155,108,255,.8), rgba(155,108,255,0) 70.71%) `,
};

const middleBlobStyle = {
  backgroundImage:
    'linear-gradient(to right, black, rgba(255,122,146,0.4) 50%, black 800px)',
  backgroundPosition: '50% 100%',
  backgroundRepeat: 'no-repeat',
};

const eventsQuery = groq`*[_type == 'event' && location->region == "oslo" && !(_id in path("drafts.**")) && startDate >= $weekStartIsoDate && startDate < $weekEndIsoDate && highlight == true] | order(startDate asc){
    name,
    startDate,
    "location": location->name,
    url,
    highlight
  }
`;

const getData = async (weekNumber) => {
  const currentYear = new Date().getFullYear();
  if (process.env.NODE_ENV !== 'development') {
    redirect('/');
  }

  const startDate = getDateOfIsoWeek(weekNumber, currentYear);
  const endDate = getDateOfIsoWeek(weekNumber, currentYear, true);
  const eventParams = {
    weekStartIsoDate: startDate.toISOString().split('T')[0], // Format as YYYY-MM-DD
    weekEndIsoDate: endDate.toISOString().split('T')[0], // Format as YYYY-MM-DD
  };

  const tags = ['event', weekNumber.toString()];
  const sanityEvents = await sanityFetch({
    query: eventsQuery,
    params: eventParams,
    tags,
  });

  const weekEvents = events.find((e) => e.week === weekNumber);
  weekEvents.events?.sort(
    (a, b) => new Date(a.startDate) - new Date(b.startDate)
  );
  const allEvents = [...weekEvents.events, ...sanityEvents]
    .filter((event) => event)
    .map((event) => ({
      ...event,
      startDate: new Date(event.startDate),
    }));

  return allEvents;
};

const Photomode = async () => {
  const weekNumber = currentWeekNumber();
  const events = await getData(weekNumber);
  const allDatesShort = Array.from(
    new Set(events.map((e) => e.startDate.toLocaleDateString('nb-NO')))
  );
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
  return (
    <div className='flex flex-col items-center justify-center'>
      <div style={middleBlobStyle} className='h-[1000px] w-[1000px] p-6'>
        <Header1 className='uppercase' text={monthName} />
        <Header2 text={`[WEEK ${weekNumber}]`} />
        {allDatesShort.map((eventDate) => {
          const weekDay = getWeekDay(eventDate);
          const [dd, mm] = eventDate.split('.');
          const dateWithoutYear = `${dd}.${mm}`;
          let filteredEvents = events
            .filter(
              (e) => e.startDate.toLocaleDateString('nb-NO') === eventDate
            )
            .sort((a, b) => a.name.localeCompare(b.name));
          return (
            <section
              key={eventDate}
              className='w-full font-source-sans font-bold '
              id={dateWithoutYear}
            >
              <div
                className={`sticky top-0 z-40 mt-6 flex border-b-2 border-b-[#ff7a92] bg-transparent  py-2 pl-4 font-source-code-pro text-lg font-bold text-[#ff7a92] sm:text-xl md:text-2xl lg:text-3xl`}
              >
                <time>{`${weekDay},${dateWithoutYear}`}</time>
              </div>
              {filteredEvents.map((event, i) => {
                const { startDate, name, location, url } = event;
                const endTime = new Date(startDate);
                endTime.setHours(endTime.getHours() + 3);
                return (
                  <div key={`${url}.${i}`}>
                    <div className='relative my-2 flex text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
                      <div className={`flex grow font-source-sans `}>
                        <div className='ml-4 py-1'>
                          <h3
                            contentEditable
                            suppressContentEditableWarning={true}
                          >
                            {name}
                          </h3>
                        </div>
                        <div className='absolute right-1 top-1/2 -translate-y-1/2  md:right-3 '>
                          <h3
                            contentEditable
                            suppressContentEditableWarning={true}
                            className='rounded bg-whitish px-1 italic text-blackish md:px-2'
                          >
                            {location}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                );
              })}
            </section>
          );
        })}
        <div className='mt-8 flex w-full justify-between '>
          <div></div>
          {/* <div>
            <Image
              className=' mr-2 rounded-full '
              src={'/imgs/OO_logo.jpg'}
              alt="Oslo Omvendt's logo"
              height={90}
              width={90}
            />
          </div> */}
          <LinkedBanner />
        </div>
      </div>
    </div>
  );
};

export default Photomode;
