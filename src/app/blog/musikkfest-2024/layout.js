export const metadata = {
  title: 'Musikkfest 2024 highlights  - Oslo Omvendt',
  description: 'Musikkfest 2024 highlights - Oslo Omvendt',
  openGraph: {
    title: 'Musikkfest 2024 highlights  - Oslo Omvendt',
    description: 'Musikkfest 2024 highlights - Oslo Omvendt',
    images: 'https://i.imgur.com/rO9yY4J.png',
  },
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
