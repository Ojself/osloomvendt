import NavBar from '@/components/layout/NavBar';

export async function generateMetadata({ params }) {
  const week = params.week;

  return {
    title: `Uke ${week} - Oslo Omvendt`,
    description:
      'Check out the latest techno and house music events happening in Oslo. Oslo Omvendt features the best club nights and DJ performances in the city',

    openGraph: {
      title: `Uke ${week} - Oslo Omvendt`,
      description:
        'Check out the latest techno and house music events happening in Oslo. Oslo Omvendt features the best club nights and DJ performances in the city',
      images: 'https://i.imgur.com/rO9yY4J.png',
    },
  };
}

export default function Layout({ children }) {
  return (
    <>
      <NavBar showLogo={false} />
      <main className='min-h-screen  w-full px-2 pb-20 pt-32 font-source-sans  text-whitish md:pt-40'>
        {children}
      </main>
    </>
  );
}
