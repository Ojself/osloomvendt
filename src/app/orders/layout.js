export const metadata = {
  title: 'Order - Oslo Omvendt',
  description: 'Your shop order',
  openGraph: {
    title: 'Order - Oslo Omvendt',
    description: 'Your shop order',
    images: 'https://i.imgur.com/rO9yY4J.png',
  },
};

export default function Layout({ children }) {
  return (
    <main className='min-h-screen bg-gray-200 px-2 font-source-code-pro'>
      {children}
    </main>
  );
}
