import { OO_BRAND_IMAGE } from "@/utils/consts";

export const metadata = {
  title: 'Checkout - Oslo Omvendt',
  description:
    'The official store of Oslo Omvendt. Find the latest happenings, buy merch, and support your favorite event guide.',
  openGraph: {
    title: 'Checkout - Oslo Omvendt',
    description:
      'The official store of Oslo Omvendt. Find the latest happenings, buy merch, and support your favorite event guide.',
    images: OO_BRAND_IMAGE,
  },
};

export default function Layout({ children }) {
  return (
    <main className='min-h-screen px-2 font-source-code-pro'>{children}</main>
  );
}
