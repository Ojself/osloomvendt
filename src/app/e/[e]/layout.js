/* TODO Something more correct here */
export const metadata = {
  title: 'Event - Oslo Omvendt',
  description: 'Event decription',
  openGraph: {
    title: 'Event - Oslo Omvendt',
    description: 'Event decription',
    images: 'https://i.imgur.com/rO9yY4J.png',
  },
};

export default function Layout({ children }) {
  return (
    <main className='min-h-screen px-2 font-source-code-pro'>{children}</main>
  );
}
