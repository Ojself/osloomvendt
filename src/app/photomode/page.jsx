import React from 'react';
import currentWeekNumber from 'current-week-number';
import groq from 'groq';

import { sanityFetch } from '@/lib/sanity/sanityClient';
import { getDateOfIsoWeek } from '@/utils';

import { redirect } from 'next/navigation';
import PhotomodeClient from "@/components/PhotomodeClient";


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
    weekStartIsoDate: startDate.toISOString().split('T')[0],
    weekEndIsoDate: endDate.toISOString().split('T')[0],
  };

  const tags = ['event', weekNumber.toString()];
  const sanityEvents = await sanityFetch({
    query: eventsQuery,
    params: eventParams,
    tags,
  });

  weekEvents.events?.sort(
    (a, b) => new Date(a.startDate) - new Date(b.startDate)
  );
  const allEvents = [ ...sanityEvents]
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

  return (
    <PhotomodeClient events={events} weekNumber={weekNumber} />
  );
};

export default Photomode;
