import groq from 'groq';

import { sanityFetch } from '@/lib/sanity/sanityClient';

const locationsQuery = groq`*[_type == 'location' && !(_id in path("drafts.**")) ] | order(name asc){
    name,
    slug {
      current
    },
    description,
    image {
      asset->{
        url
      }
    },
    logo {
      asset->{
        url
      }
    }
  }
`;

const getLocations = async () => {

  

  const tags = ['location'];
  const sanityLocations = await sanityFetch({
    query: locationsQuery,
    tags,
  });

  
  return sanityLocations;
};

export default getLocations;
