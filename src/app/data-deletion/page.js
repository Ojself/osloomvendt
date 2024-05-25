import Container from '@/components/layout/Container';
import Header1 from '@/components/layout/typograhpy/Header1';
import React from 'react';

const DataDeletion = () => {
  return (
    <Container>
      <Header1 text='Data deletion request' />

      <h4 className='mb-6 text-center'>of osloomvendt.no</h4>
      <p>Send an email to hei@osloomvendt.no</p>
    </Container>
  );
};

export default DataDeletion;
