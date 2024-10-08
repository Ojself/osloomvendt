import Link from 'next/link';
import React from 'react';
import Container from '../layout/Container';

const EmptyWeekPage = ({ yearNumber, weekNumber }) => {
  const href =
    weekNumber === 52
      ? `/d/${yearNumber - 1}/${1}`
      : `/d/${yearNumber}/${weekNumber - 1}`;

  return (
    <Container>
      <Link className='flex flex-col items-center justify-center' href={href}>
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
