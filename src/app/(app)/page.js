import HeroLink from '@/components/HeroLink';
import WeekClient from '@/components/week/WeekClient';
import getEvents from '@/utils/getEvents';

export default async function Home() {
  const events = await getEvents();

  return (
    <>
      <div className='flex h-screen flex-col items-center justify-center overflow-hidden bg-blackish'>
        <HeroLink />
      </div>
      <WeekClient events={events} />
    </>
  );
}
