export const metadata = {
  title: 'Festival guide 2024 - Oslo Omvendt',
  description: 'Festival guide for electronic music 2024',
};

export default function Layout({ children }) {
  return (
    <main
      className={`min-h-screen bg-blackish pb-12 font-source-code-pro text-whitish`}
    >
      {children}
    </main>
  );
}
