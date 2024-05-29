export const metadata = {
  title: '17. mai-program - Oslo Omvendt',
  description: 'Årets 17. mai-program!',
};

export default function Layout({ children }) {
  return (
    <main className={`flex min-h-screen flex-col items-center bg-[#DAE9F7]`}>
      {children}
    </main>
  );
}
