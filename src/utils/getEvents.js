import currentWeekNumber from 'current-week-number';
import groq from 'groq';

import { sanityFetch } from '@/lib/sanity/sanityClient';
import { getDateOfIsoWeek } from '@/utils';
import events from '@/data/events';

const eventsQuery = groq`*[_type == 'event' && !(_id in path("drafts.**")) && startDate >= $weekStartIsoDate && startDate < $weekEndIsoDate ] | order(startDate asc){
    name,
    startDate,
    "location": location->name,
    url,
    highlight
  }
`;

const getEvents = async (weekNumber = currentWeekNumber()) => {
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

  weekEvents.events.sort(
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

export default getEvents;
