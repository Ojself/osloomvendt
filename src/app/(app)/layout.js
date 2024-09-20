import NavBar from '@/components/layout/NavBar';

export const metadata = {
  metadataBase: new URL('https://www.osloomvendt.no'),
  title: 'Oslo Omvendt',
  description: "All you need to know about Oslo's clubs and raves.",
  openGraph: {
    title: 'Oslo Omvendt',
    description: "All you need to know about Oslo's clubs and raves.",
    images: 'https://i.imgur.com/rO9yY4J.png',
  },
  twitter: {
    card: 'summary_large_image', // 'summary_large_image' is typically used for sharing articles or pages with a big image preview
    title: 'Oslo Omvendt',
    description: "All you need to know about Oslo's clubs and raves.",
    images: {
      url: 'https://i.imgur.com/rO9yY4J.png',
      alt: 'Oslo Omvendt Logo',
    },
    creator: '@OsloOmvendt', // Replace with your Twitter handle
  },
};

export default function Layout({ children }) {
  return (
    <>
      <NavBar showLogo={false} />

      <main
        style={{
          backgroundImage:
            'radial-gradient(at 94% 88%, #0F0A19 0px, transparent 50%), radial-gradient(at 27% 73%, #0F0A19 0px, transparent 50%), radial-gradient(at 38% 19%, #0F0A19 0px, transparent 50%), radial-gradient(at 65% 23%, #8B61E5 0px, transparent 50%), radial-gradient(at 7% 90%, #8B61E5 0px, transparent 50%)',
        }}
        className='min-h-screen w-full bg-blackish bg-fixed bg-no-repeat px-2 pb-20 font-source-sans text-whitish'
      >
        {children}
      </main>
    </>
  );
}
