export const metadata = {
  title: 'Festivalguide - Oslo Omvendt',
  description: 'Norwegian Festivalguide 2024',
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
