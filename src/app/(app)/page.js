import HeroLink from '@/components/HeroLink';
import WeekClient from '@/components/week/WeekClient';
import getEvents from '@/utils/getEvents';
import { Suspense } from 'react';

export default async function Home() {
  const events = await getEvents();

  return (
    <>
      <div className='flex h-screen flex-col items-center justify-center'>
        <HeroLink />
      </div>
      <WeekClient events={events} />
    </>
  );
}
