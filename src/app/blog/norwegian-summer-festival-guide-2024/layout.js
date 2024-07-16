import NavBar from '@/components/layout/NavBar';

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
    <>
      <NavBar showLogo={true} />
      <main
        className={`min-h-screen bg-blackish pb-20 pt-32 font-source-code-pro  text-whitish md:pt-40`}
      >
        {children}
      </main>
    </>
  );
}
