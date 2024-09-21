import NavBar from '@/components/layout/NavBar';
import NewFooter from '@/components/layout/NewFooter';

export default function Layout({ children }) {
  return (
    <div>
      <NavBar showLogo={false} />
      <main className='radial-layout min-h-screen w-full  bg-fixed  bg-no-repeat px-2 pb-20 pt-32 font-source-sans  text-whitish md:pt-40'>
        {children}
      </main>
      <NewFooter />
    </div>
  );
}
