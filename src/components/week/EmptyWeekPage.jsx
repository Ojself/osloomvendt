"use client"
import React from 'react';
import Container from '../layout/Container';
import { useRouter } from "next/navigation";


const EmptyWeekPage = () => {

  const router = useRouter()
  
  

  return (
    <Container>
      <div  className='flex flex-col items-center justify-center text-whitish'>
        <p className='cursor-pointer text-xl '>
          no events for this week.. yet!
        </p>
        <button onClick={()=> router.back()} className='cursor-pointer text-xl underline hover:font-semibold'>
          Go back
        </button>
      </div>
    </Container>
  );
};

export default EmptyWeekPage;
