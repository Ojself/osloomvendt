import React from 'react';

import EmptyWeekPage from '@/components/week/EmptyWeekPage';
import WeekClient from '@/components/week/WeekClient';
import getEvents from '@/utils/getEvents';
import { sanityFetch } from '@/lib/sanity/sanityClient';
import currentWeekNumber from 'current-week-number';

const paramsQuery = `
*[_type == "event"]{
  _id,
  startDate
}
`;

export async function generateStaticParams() {
  // Fetch events from Sanity
  const events = await sanityFetch({ query: paramsQuery });

  // Create a Set to track unique year/weekNumber combinations
  const uniqueParams = new Set();

  // Loop through the events and extract the year and weekNumber
  events.forEach((event) => {
    if (event.startDate) {
      const startDate = new Date(event.startDate);

      const year = startDate.getFullYear();
      const weekNumber = currentWeekNumber(startDate);
      uniqueParams.add(`${year}/${weekNumber}`);
    }
  });

  // Convert the Set into an array of objects with the desired params
  return Array.from(uniqueParams).map((param) => {
    const [year, weekNumber] = param.split('/');
    return {
      slug: [year, weekNumber],
    };
  });
}

export async function generateMetadata({ params }) {
  const [year, week] = solveParams(params.slug);

  const weekNumber = parseInt(week, 10);
  const yearNumber = parseInt(year, 10);
  const events = (await getEvents(weekNumber, yearNumber)).sort(
    (a, b) => b.highlight - a.highlight
  );

  const weekString = `Week ${week}`;
  const title = `${weekString} - Oslo Omvendt`;

  if (!events || events.length === 0) {
    return {
      metadataBase: new URL('https://www.osloomvendt.no'),
      title,
      description: "No events this week, but we're still here!",
      openGraph: {
        title,
        description: "No events this week, but we're still here!",
        images: 'https://i.imgur.com/rO9yY4J.png',
      },
      twitter: {
        card: 'summary_large_image', // 'summary_large_image' is typically used for sharing articles or pages with a big image preview
        title,
        description: "No events this week, but we're still here!",
        images: {
          url: 'https://i.imgur.com/rO9yY4J.png',
          alt: 'Oslo Omvendt Logo',
        },
        creator: '@OsloOmvendt', // Replace with your Twitter handle
      },
    };
  }
  const eventsSummary = events
    .map((event) => {
      const { name } = event;
      const shortenName = name.length > 23 ? name.slice(0, 23) + '..' : name;
      return `${shortenName}`;
    })
    .slice(0, 5)
    .join(' • ');
  const firstDate = events[0]?.startDate;
  const lastDate = events[events.length - 1]?.startDate;
  const rangeDateAsString = `${firstDate.toLocaleDateString('en-US', {
    month: 'short',
  })} ${firstDate.getDate()} - ${lastDate.getDate()}`;
  const description = `${rangeDateAsString}: ${eventsSummary}`;

  return {
    metadataBase: new URL('https://www.osloomvendt.no'),
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: `/api/og?week=${weekString.toUpperCase()}&range=${rangeDateAsString}`,
          alt: rangeDateAsString,
          type: 'image/png',
        },
      ],
      //images: 'https://i.imgur.com/rO9yY4J.png',
    },
    twitter: {
      card: 'summary_large_image', // 'summary_large_image' is typically used for sharing articles or pages with a big image preview
      title,
      description,
      images: {
        url: 'https://i.imgur.com/rO9yY4J.png',
        alt: 'Oslo Omvendt Logo',
      },
      creator: '@OsloOmvendt', // Replace with your Twitter handle
    },
  };
}

const solveParams = (slug) => {
  // No date provded
  if (slug.length === 0) {
    return [new Date().getFullYear(), currentWeekNumber()];
  }
  // Only year or weekN provided
  if (slug.length === 1) {
    // only year provided
    if (slug[0].length === 4) {
      return [slug[0], currentWeekNumber()];
    }
    // only weekN provided
    return [new Date().getFullYear(), slug[0]];
  }
  // Both year and weekN provided
  const [year, week] = slug;
  return [year, week];
};

const Week = async ({ params }) => {
  const [year, week] = solveParams(params.slug);
  const yearNumber = parseInt(year, 10);
  const weekNumber = parseInt(week, 10);

  const events = await getEvents(weekNumber, yearNumber);

  if (!events || events.length === 0) {
    return <EmptyWeekPage weekNumber={weekNumber} yearNumber={yearNumber} />;
  }

  return (
    <WeekClient
      events={events}
      weekNumber={weekNumber}
      yearNumber={yearNumber}
    />
  );
};

export default Week;
