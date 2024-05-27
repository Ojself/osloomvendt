export const metadata = {
  title: 'FAQ - Oslo Omvendt',
  description: 'Frequency Asked Questions about Oslo Omvendt',
};

export default function Layout({ children }) {
  return (
    <main
      className={`min-h-screen w-full bg-gray-200 px-2 py-12 font-source-code-pro text-blackish`}
    >
      {children}
    </main>
  );
}
