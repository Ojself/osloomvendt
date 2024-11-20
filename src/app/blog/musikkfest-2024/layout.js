import NavBar from '@/components/layout/NavBar';
import { OO_BRAND_IMAGE } from "@/utils/consts";

export const metadata = {
  title: 'Musikkfest 2024 highlights  - Oslo Omvendt',
  description: 'Musikkfest 2024 highlights - Oslo Omvendt',
  openGraph: {
    title: 'Musikkfest 2024 highlights  - Oslo Omvendt',
    description: 'Musikkfest 2024 highlights - Oslo Omvendt',
    images: OO_BRAND_IMAGE,
  },
};

export default function Layout({ children }) {
  return (
    <>
      <NavBar showLogo={true} />
      <main
        className={`min-h-screen bg-blackish pb-20 pt-32 font-source-code-pro  text-whitish md:pt-40`}
      >
        {children}
      </main>
    </>
  );
}
