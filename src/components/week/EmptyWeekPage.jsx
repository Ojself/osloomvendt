import Link from 'next/link';
import React from 'react';
import Container from '../layout/Container';
import NavigationArrows from './NavigationArrows';

const EmptyWeekPage = () => {
  return (
    <Container>
      <Link className='flex flex-col items-center justify-center' href='/'>
        <p className='cursor-pointer text-xl text-whitish'>
          no events for this week.. yet!
        </p>
        <p className='cursor-pointer  text-xl text-whitish underline hover:font-semibold'>
          Go back
        </p>
      </Link>
    </Container>
  );
};

export default EmptyWeekPage;
