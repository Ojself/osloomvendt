import { OO_BRAND_IMAGE } from "@/utils/consts";

export async function generateMetadata() {
  
  return {
    title: `Venues of Oslo - Oslo Omvendt`,
    description: 'Venues of Oslo',
    openGraph: {
      title: `Venues of Oslo - Oslo Omvendt`,
      description: 'Venues of Oslo',
      images: OO_BRAND_IMAGE,
    },
  };
}

export default function Layout({ children }) {
  return (
    <main className='min-h-screen px-2 font-source-code-pro'>{children}</main>
  );
}
