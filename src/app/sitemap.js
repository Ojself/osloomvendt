import currentWeekNumber from 'current-week-number';
export default async function sitemap() {
  const links = [
    {
      url: 'https://osloomvendt.no',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: 'https://osloomvendt.no/faq',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.78,
    },
    {
      url: 'https://osloomvendt.no/suggest',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.76,
    },
    {
      url: 'https://osloomvendt.no/2023-wrapped',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.osloomvendt.no/shop',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.92,
    },
    {
      url: 'https://www.osloomvendt.no/supporters',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.osloomvendt.no/packing-list',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.89,
    },
    {
      url: 'https://www.osloomvendt.no/links',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.osloomvendt.no/blog/musikkfest-2024',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://www.osloomvendt.no/blog/norwegian-summer-festival-guide-2024',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
  ];

  const products = [
    {
      url: 'oslo-omvendt-t-shirt-black',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'oslo-omvendt-hoodie-black',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'oslo-omvendt-choker',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.81,
    },
  ];

  const currentWeekN = currentWeekNumber();
  const weeks = Array.from({ length: 52 }).map((n, i) => {
    const isSameAsWeek = i + 1 === currentWeekN;
    const isWithinTwoWeeks =
      i + 1 > currentWeekN - 2 && i + 1 < currentWeekN + 2;
    return {
      url: `https://osloomvendt.no/week/${i + 1}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      changeFrequency: isSameAsWeek
        ? 'daily'
        : isWithinTwoWeeks
          ? 'weekly'
          : 'monthly',
      priority: isSameAsWeek ? 0.98 : isWithinTwoWeeks ? 0.8 : 0.7,
    };
  });

  return [...links, ...products, ...weeks];
}
