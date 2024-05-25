export default function manifest() {
  return {
    name: 'Oslo Omvendt',
    short_name: 'OO',
    description: `The Ultimate Guide to Oslo's Clubs and Raves`,
    start_url: '/',
    display: 'standalone',
    background_color: '#0f0a19',
    theme_color: '#ACACAC',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
