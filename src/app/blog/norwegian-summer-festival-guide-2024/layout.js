export const metadata = {
  title: 'Festival guide 2024 - Oslo Omvendt',
  description: 'Festival guide for electronic music 2024',
  openGraph: {
    title: 'Festival guide 2024 - Oslo Omvendt',
    description: 'Festival guide for electronic music 2024',
    images: 'https://i.imgur.com/epHo2hF.png',
  },
};

export default function Layout({ children }) {
  return (
    <main
      className={`min-h-screen bg-blackish py-12 font-source-code-pro text-whitish`}
    >
      {children}
    </main>
  );
}
