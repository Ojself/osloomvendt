import groq from 'groq';

import { sanityFetch } from '@/lib/sanity/sanityClient';
import { getDateOfIsoWeek } from '@/utils';
import currentWeekNumber from 'current-week-number';

const eventsQuery = groq`*[_type == 'event' && !(_id in path("drafts.**")) && startDate >= $weekStartIsoDate && startDate < $weekEndIsoDate ] | order(startDate asc){
    name,
    startDate,
    "location": location->name,
    "specialEvent": specialEvent->{
      name,
      color
    },
    url,
    highlight
  }
`;

const getEvents = async (
  weekNumber = currentWeekNumber(),
  yearNumber = new Date().getFullYear()
) => {
  const startDate = getDateOfIsoWeek(weekNumber, yearNumber);
  const endDate = getDateOfIsoWeek(weekNumber, yearNumber, true);

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

  const allEvents = sanityEvents
    .filter((event) => event)
    .map((event) => ({
      ...event,
      startDate: new Date(event.startDate),
    }));

  return allEvents;
};

export default getEvents;
