import NavBar from '@/components/layout/NavBar';

export default function Layout({ children }) {
  return (
    <>
      <NavBar showLogo={false} />
      <main className='min-h-screen  w-full px-2 pb-20 pt-32 font-source-sans  text-whitish md:pt-40'>
        {children}
      </main>
    </>
  );
}
