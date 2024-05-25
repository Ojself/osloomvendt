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
    ];
  },
};

export default nextConfig;
