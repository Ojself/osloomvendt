export const metadata = {
  title: 'Test - Oslo Omvendt',
  description: 'Test page for Oslo Omvendt',
};

export default function Layout({ children }) {
  return (
    <main
      className={`min-h-screen w-full bg-blackish px-2 py-12 font-source-sans text-whitish`}
    >
      {children}
    </main>
  );
}
