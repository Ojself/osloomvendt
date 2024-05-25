'use client';

import Link from 'next/link';
import ReactImageGallery from 'react-image-gallery';
import Header3 from '../layout/typograhpy/Header3';
import './image-gallery.css';

const BlogArticle = ({
  title,
  url,
  date,
  location,
  imageSrcs,
  imageCreds,
  text,
}) => {
  return (
    <article className='mb-4 mt-16 flex flex-col'>
      <Link target='_blank' href={url}>
        <Header3
          text={`${title}, ${date}`}
          className='uppercase text-primaryDark hover:underline'
        />
      </Link>

      <h5 className='text-sm'>{location}</h5>
      <div className='image-gallery-wrapper my-4 flex flex-col items-center justify-center'>
        <ReactImageGallery
          showThumbnails={false}
          showNav={true}
          showFullscreenButton={false}
          disableKeyDown={true}
          showPlayButton={false}
          showBullets={false}
          items={imageSrcs}
        />

        <p className='text-center text-xs'>📸 {imageCreds}</p>
      </div>
      <p className=' mt-4 text-lg md:text-xl'>{text}</p>
    </article>
  );
};

export default BlogArticle;
