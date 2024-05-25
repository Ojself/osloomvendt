export const metadata = {
  title: 'Data deletion - Oslo Omvendt',
  description: 'Data deletion policy',
};

export default function Layout({ children }) {
  return (
    <main
      className={`min-h-screen w-full px-2 py-12 font-source-code-pro text-whitish`}
    >
      {children}
    </main>
  );
}
