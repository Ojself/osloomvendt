import React from 'react';
import currentWeekNumber from 'current-week-number';
import groq from 'groq';

import { sanityFetch } from '@/lib/sanity/sanityClient';
import { getDateOfIsoWeek } from '@/utils';
import events from '@/data/events';
import EmptyWeekPage from '@/components/week/EmptyWeekPage';
import WeekClient from '@/components/week/WeekClient';

export function generateStaticParams() {
  return Array.from({ length: 52 }).map((n, i) => ({
    week: (i + 1).toString(),
  }));
}

const eventsQuery = groq`*[_type == 'event' && location->region == "oslo" && !(_id in path("drafts.**")) && startDate >= $weekStartIsoDate && startDate < $weekEndIsoDate ] | order(startDate asc){
    name,
    startDate,
    "location": location->name,
    url,
    highlight
  }
`;

const getData = async (weekNumber) => {
  const currentWeekN = currentWeekNumber();
  const currentYear = new Date().getFullYear();

  const year =
    weekNumber < currentWeekN + 8 || weekNumber > currentWeekN + 33
      ? currentYear
      : currentYear - 1;
  const startDate = getDateOfIsoWeek(weekNumber, year);
  const endDate = getDateOfIsoWeek(weekNumber, year, true);
  const eventParams = {
    weekStartIsoDate: startDate.toISOString().split('T')[0], // Format as YYYY-MM-DD
    weekEndIsoDate: endDate.toISOString().split('T')[0], // Format as YYYY-MM-DD
  };

  const tags = ['event', weekNumber];
  const sanityEvents = await sanityFetch({
    query: eventsQuery,
    params: eventParams,
    tags,
  });
  console.log(sanityEvents, '<----');

  const weekEvents = events.find((e) => e.week === weekNumber);
  weekEvents.events?.sort(
    (a, b) => new Date(a.startDate) - new Date(b.startDate)
  );
  const allEvents = [...weekEvents.events, ...sanityEvents]
    .filter((event) => event)
    .map((event) => ({
      ...event,
      startDate: new Date(event.startDate),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return allEvents;
};

const Week = async ({ params }) => {
  const weekNumber = parseInt(params.week, 10);
  const events = await getData(weekNumber);

  if (!events || events.length === 0) {
    return <EmptyWeekPage />;
  }

  return <WeekClient events={events} weekNumber={weekNumber} />;
};

export default Week;
