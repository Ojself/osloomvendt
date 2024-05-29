/** @type {import('next').NextConfig} */

import currentWeekNumber from 'current-week-number';

const nextConfig = {
  async redirects() {
    const currentEventUrl = `/week/${currentWeekNumber()}`;
    return [
      {
        source: '/week',
        destination: currentEventUrl,
        permanent: true,
      },
      {
        source: '/festival-guide',
        destination: '/blog/norwegian-summer-festival-guide-2024',
        permanent: true,
      },
      {
        source: '/musikkfest',
        destination: '/blog/musikkfest-2024',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
