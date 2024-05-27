import { Anton, Source_Code_Pro, Source_Sans_3 } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import Providers from './Providers';
import Footer from '@/components/layout/Footer';
import NavBar from '@/components/layout/NavBar';

const anton = Anton({
  subsets: ['latin'],
  weight: ['400'],

  variable: '--font-anton',
});
const source_code_pro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['200', '500', '400', '700', '600'],
  variable: '--font-source-code-pro',
});

const source_sans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '500', '400', '700', '600'],
  variable: '--font-source-sans',
});

export const metadata = {
  title: 'Oslo Omvendt',
  description: "The Ultimate Guide to Oslo's Clubs and Raves",
  openGraph: {
    images: 'https://i.imgur.com/rO9yY4J.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${anton.variable} ${source_code_pro.variable} ${source_sans.variable} relative w-full bg-blackish`}
      >
        <Providers>
          <NavBar />
          {children}
          <Footer />
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        </Providers>
      </body>
    </html>
  );
}
