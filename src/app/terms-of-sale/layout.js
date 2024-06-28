export const metadata = {
  title: 'Terms of sale - Oslo Omvendt',
  description: 'Terms of sale of Oslo Omvendt',
  openGraph: {
    title: 'Terms of sale - Oslo Omvendt',
    description: 'Terms of sale of Oslo Omvendt',
    images: 'https://i.imgur.com/rO9yY4J.png',
  },
};

export default function Layout({ children }) {
  return (
    <main
      className={`min-h-screen w-full px-2 pb-20 pt-32 font-source-code-pro  text-whitish md:pt-40`}
    >
      {children}
    </main>
  );
}
