export const metadata = {
  title: '2023 Wrapped - Oslo Omvendt',
  description: '2023 wrapped by Oslo Omvendt',
  openGraph: {
    title: '2023 Wrapped - Oslo Omvendt',
    description: '2023 wrapped by Oslo Omvendt',
    images: 'https://i.imgur.com/BEI9j1J.png',
  },
};

export default function Layout({ children }) {
  return (
    <main className='flex min-h-screen w-full bg-gray-200 px-2 text-whitish'>
      {children}
    </main>
  );
}
