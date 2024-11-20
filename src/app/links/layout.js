import NavBar from '@/components/layout/NavBar';
import { OO_BRAND_IMAGE } from "@/utils/consts";

export const metadata = {
  title: 'Links - Oslo Omvendt',
  description: 'Social Links for Oslo Omvendt',
  openGraph: {
    title: 'Links - Oslo Omvendt',
    description: 'Social Links for Oslo Omvendt',
    images: OO_BRAND_IMAGE,
  },
};
export default function Layout({ children }) {
  return (
    <>
      <NavBar showLogo={true} lightMode={true} minified={false} />

      <main className='min-h-screen bg-gray-200 px-2 pb-20 pt-32 font-source-code-pro  text-whitish md:pt-40'>
        {children}
      </main>
    </>
  );
}
