export const metadata = {
  title: 'Links - Oslo Omvendt',
  description: 'Social Links for Oslo Omvendt',
  openGraph: {
    title: 'Links - Oslo Omvendt',
    description: 'Social Links for Oslo Omvendt',
    images: 'https://i.imgur.com/rO9yY4J.png',
  },
};

export default function Layout({ children }) {
  return (
    <main className='min-h-screen bg-gray-200 px-2 py-12 font-source-code-pro text-whitish'>
      {children}
    </main>
  );
}
