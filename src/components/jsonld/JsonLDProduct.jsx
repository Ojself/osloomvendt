import { client } from '@/lib/sanity/sanityClient';
import { useNextSanityImage } from 'next-sanity-image';

const JsonLDProduct = ({ product }) => {
  const { title, description, slug, images, available } = product;
  const imageProps = useNextSanityImage(client, images[0]);

  const jsonLd = {
    '@context': 'http://schema.org',
    '@type': 'Product',
    offers: [
      available.map((variant) => ({
        '@type': 'Offer',
        name: `${title} - (${variant.size})`,
        availability: 'https://schema.org/InStock',
        price: variant.price,
        priceCurrency: 'NOK',
        priceValidUntil: new Date(
          new Date().setMonth(new Date().getMonth() + 3)
        ).toISOString(),
        url: `/shop/products/${slug.current}`,
      })),
    ],
    brand: {
      name: 'Oslo Omvendt',
    },
    name: title,
    description: description,
    category: 'Clothing',
    url: `/shop/products/${slug.current}`,
    sku: '',
    image: {
      '@type': 'ImageObject',
      url: imageProps.src,
      image: imageProps.src,
      name: title,
      width: imageProps.width,
      height: imageProps.height,
    },
  };
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default JsonLDProduct;
