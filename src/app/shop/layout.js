export const metadata = {
  title: 'Shop - Oslo Omvendt',
  description:
    'The official store of Oslo Omvendt. Find the latest happenings, buy merch, and support your favorite event guide.',
  openGraph: {
    title: 'Shop - Oslo Omvendt',
    description:
      'The official store of Oslo Omvendt. Find the latest happenings, buy merch, and support your favorite event guide.',
    images: 'https://i.imgur.com/Hy5LJ08.jpeg',
  },
};

export default function Layout({ children }) {
  return (
    <main
      className={`min-h-screen w-full px-2 py-12 font-source-sans text-whitish`}
    >
      {children}
    </main>
  );
}
