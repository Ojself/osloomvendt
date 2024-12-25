'use client';

import React, { useRef, useCallback,useState } from 'react';
import { toPng } from 'html-to-image';

import Header1 from '@/components/layout/typograhpy/Header1';
import Header2 from '@/components/layout/typograhpy/Header2';
import { getWeekDay } from '@/utils';
import LinkedBanner from '@/components/layout/LinkedBanner';

const middleBlobStyle = {
  backgroundColor: '#0F0A19',
};

const PhotomodeClient = ({ events, weekNumber }) => {
  const photomodeRef = useRef(null);
  const [photoSize, setPhotoSize] = useState(1200);

  const onButtonClick = useCallback(() => {
    if (photomodeRef.current === null) {
      return;
    }
    toPng(photomodeRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `${weekNumber}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [photomodeRef]);

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
    <div className='flex flex-col items-center justify-center text-[#F9FAFC]'>
      <div className="text-blackish space-x-2 mb-2">
      <button className="border-2 border-secondaryLight  p-2 bg-secondary rounded-md" onClick={()=> setPhotoSize(800)}>Small</button>
      <button className="border-2 border-secondary  p-2 bg-secondaryDark rounded-md" onClick={()=> setPhotoSize(1000)}>Medium</button>  
      <button className="border-2 border-secondaryDark p-2 bg-secondaryLight rounded-md" onClick={()=> setPhotoSize(1200)}>Large</button>
      </div>
      <button className="border-2 mb-1 border-primary  p-2 bg-primaryDark rounded-md " onClick={onButtonClick}>Download Image</button>
      <div id='photomode' ref={photomodeRef} className='flex flex-col items-center justify-center text-[#F9FAFC]'>
        <div style={middleBlobStyle} className={`h-[${photoSize}px] w-[${photoSize}px] p-6`}>
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
              .sort((a, b) => a.name.localeCompare(b.name, 'nb-NO'));
            return (
              <section
                key={eventDate}
                className='w-full font-source-sans font-bold '
                id={dateWithoutYear}
              >
                <div
                  className={`sticky top-0 z-40 mt-6 flex border-b-2 border-b-[#FFF] bg-transparent  py-2 pl-4 font-source-code-pro text-lg font-bold  sm:text-xl md:text-2xl lg:text-3xl`}
                >
                  <time>{`${weekDay}, ${dateWithoutYear}`}</time>
                </div>
                {filteredEvents.map((event, i) => {
                  const { name, location, url } = event;
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
            <LinkedBanner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotomodeClient;
