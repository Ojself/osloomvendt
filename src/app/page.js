import HeroLink from '@/components/HeroLink';

export const metadata = {
  title: 'Oslo Omvendt',
  description: "The Ultimate Guide to Oslo's Clubs and Raves",
  openGraph: {
    title: 'Oslo Omvendt',
    description: "The Ultimate Guide to Oslo's Clubs and Raves",
    images: 'https://i.imgur.com/rO9yY4J.png',
  },
};

export default function Home() {
  return (
    <main className='h-[93vh]'>
      <div className='flex h-full flex-col items-center justify-center overflow-hidden bg-blackish'>
        <HeroLink />
      </div>
    </main>
  );
}
