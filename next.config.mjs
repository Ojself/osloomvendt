/** @type {import('next').NextConfig} */

import currentWeekNumber from 'current-week-number';

const nextConfig = {
  async redirects() {
    const currentYear = new Date().getFullYear();
    const currentEventUrl = `/d/${currentYear}/${currentWeekNumber()}`;
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
