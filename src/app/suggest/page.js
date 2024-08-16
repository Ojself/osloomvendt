import React from 'react';

import { sanityFetch } from '@/lib/sanity/sanityClient';
import groq from 'groq';
import SuggestClient from '@/components/suggest/SuggestClient';

const locationQuery = groq`
*[_type == 'location' && !(_id in path("drafts.**")) && hiddenFromUserSelection != true] | order(name) {
  name,
}
`;
const getData = async () => {
  const locations = await sanityFetch({
    query: locationQuery,
    tags: ['location'],
  });

  return locations;
};

const Suggest = async () => {
  const data = await getData();
  return <SuggestClient data={data} />;
};

export default Suggest;
