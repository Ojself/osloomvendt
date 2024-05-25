import React from 'react';
import Header5 from '../layout/typograhpy/Header5';

const GuidelineListItem = ({ title, children }) => {
  return (
    <li className='mb-3'>
      <Header5 text={title} />
      {children}
    </li>
  );
};

export default GuidelineListItem;
