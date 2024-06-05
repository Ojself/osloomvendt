export const metadata = {
  title: 'Shopping cart - Oslo Omvendt',
  description:
    'The official store of Oslo Omvendt. Find the latest happenings, buy merch, and support your favorite event guide.',
  openGraph: {
    title: 'Shopping cart - Oslo Omvendt',
    description:
      'The official store of Oslo Omvendt. Find the latest happenings, buy merch, and support your favorite event guide.',
    images: 'https://i.imgur.com/rO9yY4J.png',
  },
};

export default function Layout({ children }) {
  return (
    <main
      className={`min-h-screen w-full px-2 py-12 font-source-code-pro text-whitish`}
    >
      {children}
    </main>
  );
}
