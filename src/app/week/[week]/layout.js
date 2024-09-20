import NavBar from '@/components/layout/NavBar';
import NewFooter from '@/components/layout/NewFooter';

export default function Layout({ children }) {
  return (
    <div>
      <NavBar showLogo={false} />
      <main
        style={{
          backgroundImage:
            'radial-gradient(at 94% 88%, #0F0A19 0px, transparent 50%), radial-gradient(at 27% 73%, #0F0A19 0px, transparent 50%), radial-gradient(at 38% 19%, #0F0A19 0px, transparent 50%), radial-gradient(at 65% 23%, #8B61E5 0px, transparent 50%), radial-gradient(at 7% 90%, #8B61E5 0px, transparent 50%)',
        }}
        className='min-h-screen w-full  bg-cover bg-fixed  bg-no-repeat px-2 pb-20 pt-32 font-source-sans  text-whitish md:pt-40'
      >
        {children}
      </main>
      <NewFooter />
    </div>
  );
}
