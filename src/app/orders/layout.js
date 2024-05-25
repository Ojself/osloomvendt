export const metadata = {
  title: 'Order - Oslo Omvendt',
  description: 'Your shop order',
};

export default function Layout({ children }) {
  return (
    <main className='min-h-screen  bg-gray-200 px-2 font-source-code-pro'>
      {children}
    </main>
  );
}
