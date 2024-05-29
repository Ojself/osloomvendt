export const metadata = {
  title: 'Musikkfest 2024 highlights  - Oslo Omvendt',
  description: 'Musikkfest 2024 highlights - Oslo Omvendt',
};

export default function Layout({ children }) {
  return (
    <main
      className={`min-h-screen bg-blackish py-12 font-source-code-pro text-whitish`}
    >
      {children}
    </main>
  );
}
