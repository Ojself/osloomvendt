/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  changefreq: 'daily',
  transform: async (config, path) => {
    let priority = 0.7;

    // Custom priority for specific pages
    if (path === '/') {
      priority = 1.0;
    } else if (path.startsWith('/shop')) {
      priority = 0.9;
    } else if (path.startsWith('/supporters')) {
      priority = 0.8;
    } else if (path.startsWith('/links')) {
      priority = 0.75;
    } else if (path.startsWith('/suggest')) {
      priority = 0.72;
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
