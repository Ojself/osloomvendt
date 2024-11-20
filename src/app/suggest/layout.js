import NavBar from '@/components/layout/NavBar';
import NewFooter from '@/components/layout/NewFooter';
import { OO_BRAND_IMAGE } from "@/utils/consts";

export const metadata = {
  title: 'Oslo Omvendt - Suggest an event',
  description:
    "Send us an event suggestion and get featured on Oslo's biggest club and rave guide!",
  openGraph: {
    title: 'Oslo Omvendt - Suggest an event',
    description:
      "Send us an event suggestion and get featured on Oslo's biggest club and rave guide!",
    images: OO_BRAND_IMAGE,
  },
};

export default function Layout({ children }) {
  return (
    <>
      <NavBar showLogo={true} />
      <main
        className={`flex min-h-screen w-full px-2 pb-20 pt-32 font-source-sans text-whitish md:pt-40`}
      >
        {children}
      </main>
      <NewFooter />
    </>
  );
}
