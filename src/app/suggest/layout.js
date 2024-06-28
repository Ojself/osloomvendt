import NavBar from '@/components/layout/NavBar';

export const metadata = {
  title: 'Oslo Omvendt - Suggest an event',
  description:
    "Send us an event suggestion and get featured on Oslo's biggest club and rave guide!",
  openGraph: {
    title: 'Oslo Omvendt - Suggest an event',
    description:
      "Send us an event suggestion and get featured on Oslo's biggest club and rave guide!",
    images: 'https://i.imgur.com/rO9yY4J.png',
  },
};

export default function Layout({ children }) {
  return (
    <>
      <NavBar showLogo={true} lightMode={false} />
      <main
        className={`flex min-h-screen w-full px-2 pb-20 pt-40  font-source-sans text-whitish`}
      >
        {children}
      </main>
    </>
  );
}
