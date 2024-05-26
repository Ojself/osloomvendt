'use client';

import React, { useEffect } from 'react';
import BlogArticle from './BlogArticle';

const SummerFestival2024Client = ({ articles }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }
  }, []);
  return (
    <>
      {articles.map((props) => (
        <React.Fragment key={props.title}>
          <BlogArticle {...props} />
        </React.Fragment>
      ))}
    </>
  );
};

export default SummerFestival2024Client;
