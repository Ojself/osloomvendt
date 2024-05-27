'use client';
import react, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const pagesWhereNavIsVisible = [
  '/faq',
  '/week/',
  '/supporters',
  '/suggest',
  '/shop',
  '/blog',
];
const Footer = () => {
  const pathname = usePathname();
  const [horsePositionX, setHorsePositionX] = useState(5);
  const handleClick = () => {
    setInterval(() => {
      let random = Math.random() * 5 + 3;
      setHorsePositionX((prevPosition) => prevPosition - random);
    }, 80);
  };
  const rotation = horsePositionX % 15;
  const shouldShowFooter = pagesWhereNavIsVisible.some((page) =>
    pathname.includes(page)
  );
  return (
    <div
      className={`${
        shouldShowFooter ? '' : 'hidden'
      } absolute -bottom-20 flex h-10 w-full justify-center  pt-10`}
    >
      <footer className='m-auto flex w-full max-w-[900px] justify-between bg-linkGray px-6 py-2 font-source-code-pro text-whitish'>
        <Link href='/privacy'>
          <p className='text-sm hover:underline'>Privacy</p>
        </Link>

        <div
          onClick={handleClick}
          className='z-10 ml-1 cursor-pointer'
          style={{
            transform: `translateX(${horsePositionX}px) rotate(${rotation}deg)`,
          }}
        >
          🐎
        </div>
        <Link href='/terms-of-sale'>
          <p className='text-sm  hover:underline'>Terms of sale</p>
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
