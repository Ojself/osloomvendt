export const metadata = {
  title: 'Shop - Oslo Omvendt',
  description:
    'The official store of Oslo Omvendt. Find the latest happenings, buy merch, and support your favorite event guide.',
};

/* TODO METADATA PRODUCT NAME */

export default function Layout({ children }) {
  return (
    <main
      className={`flex min-h-screen w-full justify-center px-2 py-12 font-source-sans text-whitish`}
    >
      {children}
    </main>
  );
}
