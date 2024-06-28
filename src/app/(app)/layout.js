import NavBar from '@/components/layout/NavBar';

export const metadata = {
  title: 'Oslo Omvendt',
  description: "The Ultimate Guide to Oslo's Clubs and Raves",
  openGraph: {
    title: 'Oslo Omvendt',
    description: "The Ultimate Guide to Oslo's Clubs and Raves",
    images: 'https://i.imgur.com/rO9yY4J.png',
  },
};

export default function Layout({ children }) {
  return (
    <>
      <NavBar showLogo={false} lightMode={false} />
      <main className='h-screen w-full px-2 pb-20 pt-40 font-source-sans text-whitish'>
        {children}
      </main>
    </>
  );
}
