export const metadata = {
  title: 'Supporters - Oslo Omvendt',
  description: 'Supporters of Oslo Omvendt',
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
