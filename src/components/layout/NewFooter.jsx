'use client';
import react, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NewFooter = () => {
  const [horsePositionX, setHorsePositionX] = useState(5);
  const handleClick = () => {
    setInterval(() => {
      let random = Math.random() * 5 + 3;
      setHorsePositionX((prevPosition) => prevPosition - random);
    }, 80);
  };
  const horseInMotion = horsePositionX !== 5
  const rotation = horseInMotion ? (horsePositionX % 25) + 10: 0 
  

  return (
    <div
      className={
        'absolute -bottom-20 flex h-20 w-full flex-col items-center justify-center  bg-black'
      }
    >
      <footer className='flex w-full max-w-[900px] justify-between  px-6 py-2 font-source-code-pro text-whitish'>
        <Link href='/privacy'>
          <p className='text-sm hover:underline'>Privacy</p>
        </Link>

        <div
          onClick={handleClick}
          className="z-10 ml-1 cursor-pointer"
          style={{
            transform: `translateX(${horsePositionX}px) rotate(${rotation}deg)`,
          }}
        >
          <Image
            src="/imgs/oohorse.png"
            alt="Horse"
            width={30} 
            height={30} 
          />
        </div>
        <Link href='/terms-of-sale'>
          <p className='text-sm  hover:underline'>Terms of sale</p>
        </Link>
      </footer>
    </div>
  );
};

export default NewFooter;
