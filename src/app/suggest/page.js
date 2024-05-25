import React from 'react';

import { client } from '@/lib/sanity/sanityClient';
import groq from 'groq';
import SuggestClient from '@/components/suggest/SuggestClient';

const locationQuery = groq`
*[_type == 'location' && !(_id in path("drafts.**")) && hiddenFromUserSelection != true] | order(name) {
  name,
}
`;
const getData = async () => {
  const response = await client.fetch(locationQuery);
  return response;
};

const Suggest = async () => {
  const data = await getData();
  return <SuggestClient data={data} />;
};

export default Suggest;
