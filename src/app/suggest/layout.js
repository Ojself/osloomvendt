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
    <main
      className={`flex min-h-screen w-full px-2 py-12 font-source-sans text-whitish`}
    >
      {children}
    </main>
  );
}
