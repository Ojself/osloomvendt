import groq from 'groq';

import { sanityFetch } from '@/lib/sanity/sanityClient';
import { NextResponse } from 'next/server';
import { getDateOfIsoWeek } from '@/utils';

const apikeys = [
  {
    apikey: '24f536b5-8c51-4c16-8f61-705d240fe0bc',
    user: 'ghost',
    endOfLife: '2025-12-31',
  },
];

const eventsQuery = groq`*[_type == 'event' && !(_id in path("drafts.**")) && startDate >= $weekStartIsoDate && startDate < $weekEndIsoDate ] | order(startDate asc){
    name,
    startDate,
    "location": location->name,
    url,
  }
`;

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;

  const week = searchParams.get('week');
  const year = searchParams.get('year');
  const apikey = searchParams.get('apikey');

  if (!week) {
    return NextResponse.json(
      { message: 'Missing week number' },
      { status: 400 }
    );
  }
  const isValidApikey = apikeys.find((key) => key.apikey === apikey);
  if (!apikey || !isValidApikey) {
    return NextResponse.json(
      {
        message:
          'Missing or invalid API key. Get your free API key by contacting hei@osloomvendt.no',
      },
      { status: 400 }
    );
  }

  const yearNumber = parseInt(year, 10);
  const weekNumber = parseInt(week, 10);
  const startDate = getDateOfIsoWeek(weekNumber, yearNumber);
  const endDate = getDateOfIsoWeek(weekNumber, yearNumber, true);

  const eventParams = {
    weekStartIsoDate: startDate.toISOString().split('T')[0], // Format as YYYY-MM-DD
    weekEndIsoDate: endDate.toISOString().split('T')[0], // Format as YYYY-MM-DD
  };

  const tags = ['event', weekNumber.toString()];
  const events = await sanityFetch({
    query: eventsQuery,
    params: eventParams,
    tags,
  });

  return NextResponse.json({ events }, { status: 200 });
}
