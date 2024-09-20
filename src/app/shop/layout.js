import NavBar from '@/components/layout/NavBar';
import NewFooter from '@/components/layout/NewFooter';

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
    <>
      <NavBar showLogo={true} />
      <main
        className={`min-h-screen w-full px-2 pb-20 pt-32 font-source-sans  text-whitish md:pt-40`}
      >
        {children}
      </main>
      <NewFooter />
    </>
  );
}
