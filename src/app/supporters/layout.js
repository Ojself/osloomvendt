import NavBar from '@/components/layout/NavBar';
import NewFooter from '@/components/layout/NewFooter';
import { OO_BRAND_IMAGE } from "@/utils/consts";

export const metadata = {
  title: 'Supporters - Oslo Omvendt',
  description: 'Supporters of Oslo Omvendt',
  openGraph: {
    title: 'Supporters - Oslo Omvendt',
    description: 'Supporters of Oslo Omvendt',
    images: OO_BRAND_IMAGE,
  },
};

export default function Layout({ children }) {
  return (
    <>
      <NavBar showLogo={true} />
      <main
        className={`min-h-screen w-full px-2 pb-20 pt-32 font-source-code-pro  text-whitish md:pt-40`}
      >
        {children}
      </main>
      <NewFooter />
    </>
  );
}
