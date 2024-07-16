import NextCors from 'nextjs-cors';
import groq from 'groq';
import { getDateOfIsoWeek } from '../../utils';
import { sanityFetch } from '@/lib/sanity/sanityClient';
import { NextResponse } from 'next/server';

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
  const { week, apikey } = req.query;

  await NextCors(req, res, {
    methods: ['GET', 'HEAD'],
    origin: '*',
    optionsSuccessStatus: 200,
  });
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
          'Missing or invalid API key \n get your free API key by contacting hei@osloomvendt.no',
      },
      { status: 400 }
    );
  }

  const year = new Date().getFullYear(); // Assuming you want the current year
  const weekNumber = parseInt(week, 10);
  const startDate = getDateOfIsoWeek(weekNumber, year);
  const endDate = getDateOfIsoWeek(weekNumber, year, true);

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
