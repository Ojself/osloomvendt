export const metadata = {
  title: 'Test - Oslo Omvendt',
  description: 'Test page for Oslo Omvendt',
};

export default function Layout({ children }) {
  return (
    <main
      className={`min-h-screen w-full bg-blackish px-2 pb-20 pt-32 font-source-sans  text-whitish md:pt-40`}
    >
      {children}
    </main>
  );
}
