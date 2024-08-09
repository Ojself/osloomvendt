'use client';
import React from 'react';
import Link from 'next/link';
import { useNextSanityImage } from 'next-sanity-image';
import ImageGallery from 'react-image-gallery';
import { useRouter } from 'next-nprogress-bar';
import './image-gallery.css';

import { client } from '@/lib/sanity/sanityClient';

const ProductPreview = ({ product }) => {
  const { images, title, slug } = product;
  const router = useRouter();
  const imageProps = useNextSanityImage(client, images[0]);
  const imageProps2 = useNextSanityImage(client, images[1]);

  const galleryImages = [imageProps, imageProps2]
    .map((img) => {
      if (!img || !img.src) return null;
      return {
        original: img.src,
        originalAlt: product.description,
      };
    })
    .filter((img) => !!img);
  const href = `/shop/products/${slug.current}`;
  return (
    <li
      className='flex h-full flex-col items-center justify-between hover:text-primary '
      key={product.title}
    >
      <div className='flex items-end justify-center'>
        <ImageGallery
          onClick={(e) => {
            e.preventDefault();
            router.push(href);
          }}
          showThumbnails={false}
          showNav={true}
          showFullscreenButton={false}
          disableKeyDown={true}
          showPlayButton={false}
          showBullets={false}
          items={galleryImages}
        />
      </div>
      <div className='mt-2 '>
        <Link href={href}>
          <p className='font-source-code-pro text-xl duration-200 '>{title} </p>
        </Link>
      </div>
    </li>
  );
};

export default ProductPreview;
