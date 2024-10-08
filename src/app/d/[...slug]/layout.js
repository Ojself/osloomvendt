import RadialBackground from '@/components/RadialBackground';
import NavBar from '@/components/layout/NavBar';
import NewFooter from '@/components/layout/NewFooter';

export default function Layout({ children }) {
  return (
    <div>
      <NavBar showLogo={false} />
      <RadialBackground />
      <main className=' min-h-screen w-full px-2 pb-20 pt-32 font-source-sans  text-whitish md:pt-40'>
        {children}
      </main>
      <NewFooter />
    </div>
  );
}
