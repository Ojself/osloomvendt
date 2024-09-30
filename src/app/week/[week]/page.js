import React from 'react';

import EmptyWeekPage from '@/components/week/EmptyWeekPage';
import WeekClient from '@/components/week/WeekClient';
import getEvents from '@/utils/getEvents';

export function generateStaticParams() {
  return Array.from({ length: 52 }).map((_, i) => ({
    week: (i + 1).toString(),
  }));
}

export async function generateMetadata({ params }) {
  const week = params.week;
  const weekNumber = parseInt(params.week, 10);
  const events = (await getEvents(weekNumber)).sort(
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

const Week = async ({ params }) => {
  const weekNumber = parseInt(params.week, 10);
  const events = await getEvents(weekNumber);

  if (!events || events.length === 0) {
    return <EmptyWeekPage />;
  }

  return <WeekClient events={events} weekNumber={weekNumber} />;
};

export default Week;
