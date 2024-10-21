'use client';
import React, { useEffect, useState } from 'react';

import LinkedBanner from '../layout/LinkedBanner';
import { useRouter } from 'next-nprogress-bar';
import TableDay from './TableDay';
import Container from '../layout/Container';
import { HeroDateBanner } from './HeroDateBanner';
import NavigationArrows from './NavigationArrows';
import ActionButtons from './ActionButtons';
import currentWeekNumber from 'current-week-number';

const WeekClient = ({
  events,
  weekNumber = currentWeekNumber(),
  yearNumber = new Date().getFullYear(),
}) => {
  const [highlightMode, setHighlightMode] = useState(false);
  const [specialEventMode, setSpecialEventMode] = useState(null);

  const [filteredLocations, setFilteredLocations] = useState([]);

  const router = useRouter();
  const previousDate =
    weekNumber === 1
      ? `${yearNumber - 1}/52`
      : `${yearNumber}/${weekNumber - 1}`;

  const nextDate =
    weekNumber === 52
      ? `${yearNumber + 1}/1`
      : `${yearNumber}/${weekNumber + 1}`;

  const noEarlierWeeks = yearNumber === 2022 && weekNumber === 8;

  const previousWeekHref = noEarlierWeeks ? '/d/2022/8' : `/d/${previousDate}`;
  const nextWeekHref = `/d/${nextDate}`;

  const onKeyDown = (e) => {
    const { code } = e;
    if (code === 'KeyH') {
      setHighlightMode((highlightMode) => !highlightMode);
      setSpecialEventMode(null);
    }
    if (code === 'ArrowLeft') router.push(previousWeekHref);
    if (code === 'ArrowRight') router.push(nextWeekHref);
    if (code === 'ArrowLeft' || code === 'ArrowRight') {
      setFilteredLocations([]);
      setHighlightMode(false);
      setSpecialEventMode(null);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      setFilteredLocations([]);
      setHighlightMode(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const allDatesShort = Array.from(
    new Set(events.map((e) => e.startDate.toLocaleDateString('nb-NO')))
  );
  const nowHour = new Date().getHours();
  const isNight = nowHour >= 0 && nowHour <= 4;

  return (
    <Container>
      <HeroDateBanner events={events} weekNumber={weekNumber} />

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
          isNight={isNight}
          specialEventMode={specialEventMode}
          setSpecialEventMode={setSpecialEventMode}
        />
      </>

      <div>
        {allDatesShort.map((eventDate, i) => {
          let filteredEvents = events
            .filter(
              (e) => e.startDate.toLocaleDateString('nb-NO') === eventDate
            )
            .sort((a, b) => a.name.localeCompare(b.name, 'nb-NO'));

          if (filteredLocations.length > 0) {
            filteredEvents = filteredEvents.filter((event) =>
              filteredLocations.includes(event.location)
            );
          }
          if (highlightMode) {
            filteredEvents = filteredEvents.filter((event) => event.highlight);
          }
          if (specialEventMode) {
            filteredEvents = filteredEvents.filter(
              (event) =>
                event.specialEvent &&
                event.specialEvent.name === specialEventMode
            );
          }

          return (
            !!filteredEvents.length && (
              <TableDay
                key={`${eventDate}-${i}`}
                date={eventDate}
                events={filteredEvents}
                isNight={isNight}
                index={i}
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
