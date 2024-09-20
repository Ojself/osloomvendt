import NavBar from '@/components/layout/NavBar';
import NewFooter from '@/components/layout/NewFooter';

export const metadata = {
  title: 'FAQ - Oslo Omvendt',
  description: 'Frequency Asked Questions about Oslo Omvendt',
  openGraph: {
    title: 'FAQ - Oslo Omvendt',
    description: 'Frequency Asked Questions about Oslo Omvendt',
    images: 'https://i.imgur.com/rO9yY4J.png',
  },
};

export default function Layout({ children }) {
  return (
    <>
      <NavBar showLogo={true} lightMode={true} />
      <main
        className={`min-h-screen w-full bg-gray-200 px-2 pb-20 pt-32 font-source-code-pro  text-blackish md:pt-40`}
      >
        {children}
      </main>
      <NewFooter />
    </>
  );
}
