export const metadata = {
  title: 'Packing list - Oslo Omvendt',
  description:
    'The official packing list for forest raves. Have a better experience by preparing correctly.',
  openGraph: {
    title: 'Packing list - Oslo Omvendt',
    description:
      'The official packing list for forest raves. Have a better experience by preparing correctly.',
    images: 'https://i.imgur.com/rO9yY4J.png',
  },
};

export default function Layout({ children }) {
  return (
    <main className='min-h-screen w-full px-2 py-12 font-source-code-pro text-whitish'>
      {children}
    </main>
  );
}
