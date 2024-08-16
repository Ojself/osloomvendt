'use client';
import React, { useEffect, useState } from 'react';

import LinkedBanner from '../layout/LinkedBanner';
import { useRouter } from 'next-nprogress-bar';
import TableDay from './TableDay';
import Container from '../layout/Container';
import { HeroDateBanner } from './HeroDateBanner';
import NavigationArrows from './NavigationArrows';
import ActionButtons from './ActionButtons';

const WeekClient = ({ events, weekNumber }) => {
  const [photoMode, setPhotoMode] = useState(false);
  const [highlightMode, setHighlightMode] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState([]);
  /* const [calendarMode, setCalendarMode] = useLocalStorage(
    'calendarMode',
    false
  ); */
  const [calendarMode, setCalendarMode] = useState(false);

  const router = useRouter();

  const previousWeekHref =
    weekNumber === 1 ? `/week/52` : `/week/${weekNumber - 1}`;
  const nextWeekHref = weekNumber >= 52 ? `/week/1` : `/week/${weekNumber + 1}`;

  const onKeyDown = (e) => {
    const { code } = e;
    if (code === 'KeyP') setPhotoMode((photoMode) => !photoMode);
    if (code === 'KeyH') setHighlightMode((highlightMode) => !highlightMode);
    if (code === 'ArrowLeft') router.push(previousWeekHref);
    if (code === 'ArrowRight') router.push(nextWeekHref);

    if (code === 'ArrowLeft' || code === 'ArrowRight') {
      setPhotoMode(false);
      setHighlightMode(false);
      setFilteredLocations([]);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      setFilteredLocations([]);
      setPhotoMode(false);
      setHighlightMode(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const allDatesShort = Array.from(
    new Set(events.map((e) => e.startDate.toLocaleDateString('nb-NO')))
  );

  return (
    <Container>
      <HeroDateBanner events={events} weekNumber={weekNumber} />
      {!photoMode && (
        <>
          <NavigationArrows
            nextWeekHref={nextWeekHref}
            previousWeekHref={previousWeekHref}
          />
          <ActionButtons
            events={events}
            setHighlightMode={setHighlightMode}
            highlightMode={highlightMode}
            filteredLocations={filteredLocations}
            setFilteredLocations={setFilteredLocations}
          />
        </>
      )}

      <div>
        {allDatesShort.map((eventDate, i) => {
          let filteredEvents = events.filter(
            (e) => e.startDate.toLocaleDateString('nb-NO') === eventDate
          );
          //            .sort((a, b) => a.name.localeCompare(b.name));

          if (filteredLocations.length > 0) {
            filteredEvents = filteredEvents.filter((event) =>
              filteredLocations.includes(event.location)
            );
          }
          if (highlightMode) {
            filteredEvents = filteredEvents.filter((event) => event.highlight);
          }

          return (
            !!filteredEvents.length && (
              <TableDay
                key={`${eventDate}-${i}`}
                date={eventDate}
                calendarMode={calendarMode}
                events={filteredEvents}
                photoMode={photoMode}
              />
            )
          );
        })}
      </div>
      <div className='mt-8 flex justify-between'>
        <div></div>
        <LinkedBanner />
      </div>
    </Container>
  );
};

export default WeekClient;
