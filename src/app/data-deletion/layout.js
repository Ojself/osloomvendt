export const metadata = {
  title: 'Data deletion - Oslo Omvendt',
  description: 'Data deletion policy',
  openGraph: {
    title: 'Data deletion - Oslo Omvendt',
    description: 'Data deletion policy',
    images: 'https://i.imgur.com/rO9yY4J.png',
  },
};

export default function Layout({ children }) {
  return (
    <main
      className={`min-h-screen w-full px-2 pb-20 pt-40 font-source-code-pro text-whitish`}
    >
      {children}
    </main>
  );
}
