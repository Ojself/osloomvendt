import NavBar from '@/components/layout/NavBar';
import NewFooter from '@/components/layout/NewFooter';
import { OO_BRAND_IMAGE } from "@/utils/consts";

export const metadata = {
  title: 'FAQ - Oslo Omvendt',
  description: 'Frequency Asked Questions about Oslo Omvendt',
  openGraph: {
    title: 'FAQ - Oslo Omvendt',
    description: 'Frequency Asked Questions about Oslo Omvendt',
    images: OO_BRAND_IMAGE,
  },
};

export default function Layout({ children }) {
  return (
    <>
      <NavBar showLogo={true} lightMode={true} />
      <main
        className={`min-h-screen w-full bg-gray-900 px-2 pb-20 pt-32 font-source-code-pro text-whitish md:pt-40`}
      >
        {children}
      </main>
      <NewFooter />
    </>
  );
}
