export const metadata = {
  title: 'Links - Oslo Omvendt',
  description: 'Social Links for Oslo Omvendt',
};

export default function Layout({ children }) {
  return (
    <main className='min-h-screen bg-gray-200 px-2 py-12 font-source-code-pro text-whitish'>
      {children}
    </main>
  );
}
