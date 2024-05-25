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
      } flex h-[10vh] w-full justify-between  `}
    >
      {shouldShowLogo ? (
        <div>
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
