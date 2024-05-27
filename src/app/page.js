import currentWeekNumber from 'current-week-number';
import Link from 'next/link';

export default function Home() {
  const currentWeekNumberString = currentWeekNumber().toString();
  const currentEventUrl = `/week/${currentWeekNumberString}`;
  return (
    <main className='h-[90vh]'>
      <div className='flex h-full flex-col items-center justify-center overflow-hidden bg-blackish'>
        <Link className='w-full' href={currentEventUrl}>
          <div
            className={`mb-20 flex h-32 w-full items-center bg-blackish text-whitish transition duration-300 ease-in-out hover:bg-whitish hover:text-blackish sm:h-36 md:h-40 lg:h-64 `}
          >
            <h1 className='w-full select-none whitespace-nowrap text-center font-anton text-6xl sm:text-8xl md:text-9xl lg:text-10xl'>
              OSLO OMVENDT
            </h1>
          </div>
        </Link>
        <Link
          className='w-full'
          href={'/blog/norwegian-summer-festival-guide-2024'}
        >
          <div
            className={`mb-20 flex h-32 w-full items-center bg-blackish text-whitish transition duration-300 ease-in-out hover:bg-whitish hover:text-blackish sm:h-36 md:h-40 lg:h-64 `}
          >
            <h1 className='w-full select-none whitespace-nowrap text-center font-anton text-6xl sm:text-8xl md:text-9xl lg:text-10xl'>
              2024 FESTIVAL GUIDE
            </h1>
          </div>
        </Link>
      </div>
    </main>
  );
}
