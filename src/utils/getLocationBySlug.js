import groq from 'groq';
import { sanityFetch } from '@/lib/sanity/sanityClient';

const locationQuery = groq`
  *[_type == "location" && slug.current == $slug][0]{
    name,
    description,
  }
`;

const getLocationBySlug = async (slug) => {
  const params = { slug };
  const location = await sanityFetch({
    query: locationQuery,
    params,
    tags: ['location', slug],
  });

  return location;
};

export default getLocationBySlug;
