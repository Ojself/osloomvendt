import NavBar from '@/components/layout/NavBar';

export const metadata = {
  title: 'Supporters - Oslo Omvendt',
  description: 'Supporters of Oslo Omvendt',
  openGraph: {
    title: 'Supporters - Oslo Omvendt',
    description: 'Supporters of Oslo Omvendt',
    images: 'https://i.imgur.com/rO9yY4J.png',
  },
};

export default function Layout({ children }) {
  return (
    <>
      <NavBar showLogo={true} lightMode={false} />
      <main
        className={`min-h-screen w-full px-2 pb-20 pt-40 font-source-code-pro text-whitish`}
      >
        {children}
      </main>
    </>
  );
}
