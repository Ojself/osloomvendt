import { OO_BRAND_IMAGE } from "@/utils/consts";

export const metadata = {
  title: 'Order - Oslo Omvendt',
  description: 'Your shop order',
  openGraph: {
    title: 'Order - Oslo Omvendt',
    description: 'Your shop order',
    images: OO_BRAND_IMAGE,
  },
};

export default function Layout({ children }) {
  return (
    <main className='min-h-screen bg-gray-200 px-2 font-source-code-pro'>
      {children}
    </main>
  );
}
