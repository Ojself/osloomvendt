import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'e5nubesn';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_TOKEN;

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
  token,
  withCredentials: false,
});

export async function sanityFetch({ query, params = {}, tags }) {
  return client.fetch(query, params, {
    next: {
      tags, // for tag-based revalidation
    },
  });
}

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
