export const metadata = {
  title: 'Photomode - Oslo Omvendt',
  description: 'Photomode for Oslo Omvendt',
};

export default function Layout({ children }) {
  return (
    <main
      className={`min-h-screen w-full bg-slate-500 px-2 pb-20 pt-32 font-source-sans  text-whitish md:pt-40`}
    >
      {children}
    </main>
  );
}
