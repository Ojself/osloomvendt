import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
const LoadingSpinner = ({}) => {
  return (
    <section className='bg-whitish mt-36 flex items-center justify-center rounded-lg p-6 shadow-2xl'>
      <div className='flex flex-col text-center'>
        <div className='flex justify-center'>
          <AiOutlineLoading3Quarters className='animate-spin self-center' />
        </div>
      </div>
    </section>
  );
};

export default LoadingSpinner;
