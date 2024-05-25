export const metadata = {
  title: 'Packing list - Oslo Omvendt',
  description:
    'The official packing list for forest raves. Have a better experience by preparing correctly.',
};

export default function Layout({ children }) {
  return (
    <main className='min-h-screen w-full px-2 py-12 font-source-code-pro text-whitish'>
      {children}
    </main>
  );
}
