export default function manifest() {
  return {
    name: 'Oslo Omvendt',
    short_name: 'OO',
    description:
      "All you need to know about Oslo's clubs and raves. See you at the rail!",
    start_url: './',
    display: 'standalone',
    background_color: '#0f0a19',
    theme_color: '#ACACAC',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/apple-touch-icon.png',
      },

      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/android-chrome-192x192',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '256x256',
        url: '/android-chrome-256x256',
      },
    ],
  };
}
