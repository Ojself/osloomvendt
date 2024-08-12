import NavBar from '@/components/layout/NavBar';

export const metadata = {
  title: 'Oslo Omvendt',
  description:
    "All you need to know about Oslo's clubs and raves. See you at the rails!",
  openGraph: {
    title: 'Oslo Omvendt',
    description:
      "All you need to know about Oslo's clubs and raves. See you at the rails!",
    images: 'https://i.imgur.com/rO9yY4J.png',
  },
};

export default function Layout({ children }) {
  return (
    <>
      <NavBar showLogo={false} />
      <main className='h-screen w-full px-2 pb-20 pt-32 font-source-sans  text-whitish md:pt-40'>
        {children}
      </main>
    </>
  );
}
