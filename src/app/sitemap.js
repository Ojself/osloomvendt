import { sanityFetch } from '@/lib/sanity/sanityClient';
import currentWeekNumber from 'current-week-number';
const paramsQuery = `
*[_type == "event"]{
  _id,
  startDate,
  _updatedAt
}
`;

export default async function sitemap() {
  const links = [
    {
      url: 'https://www.osloomvendt.no/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.69,
    },
    {
      url: 'https://www.osloomvendt.no/terms-of-sale',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.69,
    },
    {
      url: 'https://www.osloomvendt.no',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: 'https://www.osloomvendt.no/faq',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.78,
    },
    {
      url: 'https://www.osloomvendt.no/suggest',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.76,
    },
    {
      url: 'https://www.osloomvendt.no/2023-wrapped',
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
      url: 'https://www.osloomvendt.no/shop/oslo-omvendt-t-shirt-black',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://www.osloomvendt.no/shop/oslo-omvendt-hoodie-black',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://www.osloomvendt.no/shop/oslo-omvendt-choker',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.81,
    },
  ];
  const allEvents = await sanityFetch({ query: paramsQuery });

  const currentWeekN = currentWeekNumber();
  const currentYearN = new Date().getFullYear();

  // Generate dynamic event URLs based on their startDate
  const eventUrls = allEvents.map((event) => {
    const startDate = new Date(event.startDate);
    const year = startDate.getUTCFullYear(); // Extract the year from the startDate
    const weekNumber = currentWeekNumber(startDate); // Get the week number for the startDate

    const isSameAsWeek = weekNumber === currentWeekN && year === currentYearN;
    const isWithinTwoWeeks =
      weekNumber >= currentWeekN - 2 &&
      weekNumber <= currentWeekN + 2 &&
      year === currentYearN;

    return {
      url: `https://www.osloomvendt.no/d/${year}/${weekNumber}`,
      lastModified: event._updatedAt.slice(0, 10),
      changeFrequency: isSameAsWeek
        ? 'daily'
        : isWithinTwoWeeks
          ? 'weekly'
          : 'monthly',
      priority: isSameAsWeek ? 0.97 : isWithinTwoWeeks ? 0.91 : 0.71,
    };
  });
  // if duplicated urls, remove them
  const uniqueUrls = new Set();
  const filteredEventUrls = eventUrls.filter((eventUrl) => {
    if (uniqueUrls.has(eventUrl.url)) {
      return false;
    }
    uniqueUrls.add(eventUrl.url);
    return true;
  });

  return [...links, ...products, ...filteredEventUrls];
}
