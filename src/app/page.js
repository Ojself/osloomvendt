import currentWeekNumber from 'current-week-number';
import Link from 'next/link';

export const metadata = {
  title: 'Oslo Omvendt',
  description: "The Ultimate Guide to Oslo's Clubs and Raves",
  icons: [
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '32x32',
      url: './favicons/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      url: './favicons/android-chrome-192x192',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '256x256',
      url: './favicons/android-chrome-256x256',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: './favicons/apple-touch-icon.png',
    },
  ],
  openGraph: {
    title: 'Oslo Omvendt',
    description: "The Ultimate Guide to Oslo's Clubs and Raves",
    images: 'https://i.imgur.com/rO9yY4J.png',
  },
};

export default function Home() {
  const currentWeekNumberString = currentWeekNumber().toString();
  const currentEventUrl = `/week/${currentWeekNumberString}`;
  return (
    <main className='h-[94vh]'>
      <div className='flex h-full flex-col items-center justify-center overflow-hidden bg-blackish'>
        {/* <Link className='w-full' href={currentEventUrl}>
          <div
            className={`mb-20 flex h-32 w-full items-center bg-blackish text-whitish transition duration-300 ease-in-out hover:bg-whitish hover:text-blackish sm:h-36 md:h-40 lg:h-64 `}
          >
            <h1 className='w-full select-none whitespace-nowrap text-center font-anton text-6xl sm:text-8xl md:text-9xl lg:text-10xl'>
              OSLO OMVENDT
            </h1>
          </div>
        </Link> */}
        <Link className='w-full' href={currentEventUrl}>
          <div
            className={`pride-bg mb-20 flex h-20  w-full items-center transition duration-500 ease-in-out sm:h-36 md:h-40 lg:h-64 `}
          >
            <h1 className=' w-full select-none whitespace-nowrap text-center font-anton text-6xl  sm:text-8xl md:text-9xl lg:text-10xl'>
              OSLO OMVENDT
            </h1>
          </div>
        </Link>
      </div>
    </main>
  );
}
