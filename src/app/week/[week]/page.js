import React from 'react';
import currentWeekNumber from 'current-week-number';
import groq from 'groq';

import { sanityFetch } from '@/lib/sanity/sanityClient';
import { getDateOfIsoWeek } from '@/utils';
import events from '@/data/events';
import EmptyWeekPage from '@/components/week/EmptyWeekPage';
import WeekClient from '@/components/week/WeekClient';

const eventsQuery = groq`*[_type == 'event' && !(_id in path("drafts.**")) && startDate >= $weekStartIsoDate && startDate < $weekEndIsoDate ] | order(startDate asc){
    name,
    startDate,
    "location": location->name,
    url,
    highlight
  }
`;

export function generateStaticParams() {
  return Array.from({ length: 52 }).map((n, i) => ({
    week: (i + 1).toString(),
  }));
}

const getData = async (weekNumber) => {
  const currentWeekN = currentWeekNumber();
  const currentYear = new Date().getFullYear();

  const isLessThan3MontsAhead = weekNumber < currentWeekN + 12;
  const isLessThan3MonthsBehind = weekNumber > currentWeekN - 12;
  const year =
    isLessThan3MontsAhead || isLessThan3MonthsBehind
      ? currentYear
      : currentYear - 1;

  const startDate = getDateOfIsoWeek(weekNumber, year);
  const endDate = getDateOfIsoWeek(weekNumber, year, true);
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

export async function generateMetadata({ params }) {
  const week = params.week;
  const weekNumber = parseInt(params.week, 10);
  const events = (await getData(weekNumber)).sort(
    (a, b) => b.highlight - a.highlight
  );

  const weekString = `Week ${week}`;
  const title = `${weekString} - Oslo Omvendt`;
  const eventsSummary = events
    .map((event) => {
      const { name } = event;
      const shortenName = name.length > 23 ? name.slice(0, 23) + '..' : name;
      return `${shortenName}`;
    })
    .slice(0, 5)
    .join(' • ');
  const firstDate = events[0].startDate;
  const lastDate = events[events.length - 1].startDate;
  const rangeDateAsString = `${firstDate.toLocaleDateString('en-US', {
    month: 'short',
  })} ${firstDate.getDate()} - ${lastDate.getDate()}`;
  const description = `${rangeDateAsString}: ${eventsSummary}`;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: [
        {
          url: `/api/og?week=${weekString.toUpperCase()}&range=${rangeDateAsString}`,
          alt: rangeDateAsString,
          type: 'image/png',
        },
      ],
      //images: 'https://i.imgur.com/rO9yY4J.png',
    },
  };
}

const Week = async ({ params }) => {
  const weekNumber = parseInt(params.week, 10);
  const events = await getData(weekNumber);

  if (!events || events.length === 0) {
    return <EmptyWeekPage />;
  }

  return <WeekClient events={events} weekNumber={weekNumber} />;
};

export default Week;
