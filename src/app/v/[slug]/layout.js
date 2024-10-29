import getLocationBySlug from '@/utils/getLocationBySlug';

export async function generateMetadata({ params }) {
  const { slug } = params;

  const location = await getLocationBySlug(slug);

  // Handle location not found
  if (!location) {
    return {
      title: 'Venue Not Found - Oslo Omvendt',
      description: 'The requested venue does not exist.',
    };
  }

  return {
    title: `${location.name} - Oslo Omvendt`,
    description: location.description || 'Venue description',
    openGraph: {
      title: `${location.name} - Oslo Omvendt`,
      description: location.description || 'Venue description',
      images: location.imageUrl || 'https://i.imgur.com/rO9yY4J.png',
    },
  };
}

export default function Layout({ children }) {
  console.log('b');
  return (
    <main className='min-h-screen px-2 font-source-code-pro'>{children}</main>
  );
}
