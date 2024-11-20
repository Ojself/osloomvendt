import { OO_BRAND_IMAGE } from "@/utils/consts";

/* TODO Something more correct here */
export const metadata = {
  title: 'Event - Oslo Omvendt',
  description: 'Event decription',
  openGraph: {
    title: 'Event - Oslo Omvendt',
    description: 'Event decription',
    images: OO_BRAND_IMAGE,
  },
};

export default function Layout({ children }) {
  return (
    <main className='min-h-screen px-2 font-source-code-pro'>{children}</main>
  );
}
