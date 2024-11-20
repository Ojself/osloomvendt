// components/jsonld/JsonLDPlace.js

import { urlFor } from '@/lib/sanity/sanityClient';

const JsonLDPlace = ({ location }) => {
  const { name, description, url, image, address } = location;

  // Fetch the image properties using useNextSanityImage
  const imageUrl = image ? urlFor(image) : null;

  // Construct the address object for JSON-LD
  const addressJsonLd = address
    ? {
        '@type': 'PostalAddress',
        streetAddress: address.streetAddress,
        addressLocality: address.city,
        postalCode: address.postalCode,
        addressCountry: address.country,
      }
    : undefined;

  // Construct the JSON-LD object
  const jsonLd = {
    '@context': 'http://schema.org',
    '@type': 'Place',
    name: name,
    description: description || 'Description of the place',
    url: url || `https://osloomvendt.no/v/${encodeURIComponent(name)}`,
    image: imageUrl ? imageUrl.toString() : undefined,
    address: addressJsonLd,
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default JsonLDPlace;
