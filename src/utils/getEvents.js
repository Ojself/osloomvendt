import groq from 'groq';

import { sanityFetch } from '@/lib/sanity/sanityClient';
import { getDateOfIsoWeek } from '@/utils';
import currentWeekNumber from 'current-week-number';

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

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
  .map((event) => {
    // Parse the UTC date from Sanity
    const utcTime = dayjs.utc(event.startDate)

    
    const osloTime = utcTime.tz('Europe/Oslo')
    const formattedOsloTime = osloTime.format('YYYY-MM-DDTHH:mm:ss.SSSZ')

    return {
      ...event,
      startDate: new Date(formattedOsloTime),
    }
  });
    
    return allEvents;
};

export default getEvents;
