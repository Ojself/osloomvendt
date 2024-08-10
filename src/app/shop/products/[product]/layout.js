export default function Layout({ children }) {
  return (
    <main
      className={`flex min-h-screen w-full justify-center px-2 pb-20 pt-32 font-source-sans  text-whitish md:pt-40`}
    >
      {children}
    </main>
  );
}
