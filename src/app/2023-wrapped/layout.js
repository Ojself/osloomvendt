export const metadata = {
  title: 'FAQ - Oslo Omvendt',
  description: 'Frequently Asked Questions',
};

export default function Layout({ children }) {
  return (
    <main className='flex min-h-screen w-full bg-gray-200 px-2 text-whitish'>
      {children}
    </main>
  );
}
