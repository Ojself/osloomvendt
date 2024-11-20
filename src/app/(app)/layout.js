import RadialBackground from '@/components/RadialBackground';
import NavBar from '@/components/layout/NavBar';
import NewFooter from '@/components/layout/NewFooter';
import { OO_BRAND_IMAGE } from "@/utils/consts";

export const metadata = {
  metadataBase: new URL('https://www.osloomvendt.no'),
  title: 'Oslo Omvendt',
  description: "All you need to know about Oslo's clubs and raves.",
  openGraph: {
    title: 'Oslo Omvendt',
    description: "All you need to know about Oslo's clubs and raves.",
    images: OO_BRAND_IMAGE,
  },
  twitter: {
    card: 'summary_large_image', 
    title: 'Oslo Omvendt',
    description: "All you need to know about Oslo's clubs and raves.",
    images: {
      url: OO_BRAND_IMAGE,
      alt: 'Oslo Omvendt Logo',
    },
    creator: '@OsloOmvendt', 
  },
};

export default function Layout({ children }) {
  return (
    <>
      <NavBar showLogo={false} />
      <RadialBackground />
      <main className='min-h-screen w-full  px-2 pb-20 font-source-sans text-whitish '>
        {children}
      </main>
      <NewFooter />
    </>
  );
}
