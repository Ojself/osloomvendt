'use client';
import MenuDropdown from './MenuDropdown';
import { usePathname } from 'next/navigation';

import LinkedBanner from './LinkedBanner';
import NavBarCart from './NavBarCart';

const NavBar = () => {
  const pathname = usePathname();

  const shouldShowLogo = [
    '/privacy',
    '/terms-of-sale',
    '/shop',
    '/packing-list',
    '/supporters',
    '/faq',
    '/suggest',
    '/blog',
  ].some((url) => pathname.includes(url));

  const lightMode = ['/links', '/2023-wrapped'].some((url) =>
    pathname.includes(url)
  );

  return (
    <nav
      className={`${
        lightMode ? 'bg-gray-200' : `bg-transparent`
      } flex h-[5vh] max-h-[80px] w-full justify-between md:h-[6vh]  `}
    >
      {shouldShowLogo ? (
        <div className='flex items-center justify-center bg-whitish'>
          <LinkedBanner />
        </div>
      ) : (
        <div> </div>
      )}
      <div className='mr-4 flex items-center sm:mr-6 md:mr-10 '>
        <NavBarCart />
        <MenuDropdown />
      </div>
    </nav>
  );
};

export default NavBar;
