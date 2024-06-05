import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'e5nubesn';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token =
  process.env.SANITY_API_TOKEN ||
  'skhA7njhDiLPOiPp5XmRGoqRrNRAzc8P6dkLD8KgUkVOgduDrJhFY9C1rMhhQcY9Bg4iweXrQq5MxKDEHyErBFvY8lk8QnLYDzzzOHRWpQsrJmOAnFMpEu2Ey4QId4bMN4A6WLhsfOQ2lRd3pNlevD8HYeHz3XztTw62CsUKcutotgsrHCwh';

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
  token,
  withCredentials: true,
});

export async function sanityFetch({ query, params = {}, tags }) {
  console.log(query, params, tags, '<---tt');
  return client.fetch(query, params, {
    next: {
      tags, // for tag-based revalidation
    },
  });
}
