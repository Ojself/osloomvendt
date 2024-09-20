import NavBar from '@/components/layout/NavBar';
import NewFooter from '@/components/layout/NewFooter';

export const metadata = {
  title: '17. mai-program - Oslo Omvendt',
  description: 'Årets 17. mai-program!',
  openGraph: {
    title: '17. mai-program - Oslo Omvendt',
    description: 'Årets 17. mai-program!',
    images: 'https://i.imgur.com/RBhrvKE.png',
  },
};

export default function Layout({ children }) {
  return (
    <>
      <NavBar showLogo={true} />
      <main className={`flex min-h-screen flex-col items-center bg-[#DAE9F7]`}>
        {children}
      </main>
      <NewFooter />
    </>
  );
}
