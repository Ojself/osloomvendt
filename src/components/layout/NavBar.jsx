'use client';
import MenuDropdown from './MenuDropdown';

import LinkedBanner from './LinkedBanner';
import NavBarCart from './NavBarCart';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = ({ lightMode, showLogo, minified }) => {
  const isMobileView = typeof window !== 'undefined' && window.innerWidth < 768;
  const renderMinifiedVersion = isMobileView || minified;

  return (
    <nav
      className={`absolute flex w-full items-center justify-between bg-transparent`}
    >
      {showLogo && renderMinifiedVersion ? (
        <Link href='/'>
          <Image
            className='ml-2 mt-1 cursor-pointer rounded-full duration-200 hover:opacity-80'
            src={lightMode ? '/imgs/OO_logo.jpg' : '/imgs/OO_logo_reverted.jpg'}
            alt="Oslo Omvendt's logo"
            height={45}
            width={45}
          />
        </Link>
      ) : showLogo ? (
        <div
          className={`flex items-center justify-center  ${lightMode ? 'bg-gray-200' : 'bg-whitish'}`}
        >
          <LinkedBanner bg={lightMode ? 'bg-gray-200' : ''} />
        </div>
      ) : (
        <div> </div>
      )}
      <div className='mr-4 flex items-center sm:mr-6 md:mr-10'>
        <NavBarCart />
        <MenuDropdown />
      </div>
    </nav>
  );
};

export default NavBar;
