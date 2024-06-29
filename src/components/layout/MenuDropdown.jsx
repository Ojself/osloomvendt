import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import currentWeekNumber from 'current-week-number';
import { useRouter } from 'next-nprogress-bar';

const MenuDropdown = () => {
  const navs = [
    {
      href: `/week/${currentWeekNumber()}`,
      label: `Week ${currentWeekNumber()} events`,
    },

    { href: '/shop', label: 'Shop' },
    { href: '/supporters', label: 'Supporters' },
    { href: '/packing-list', label: 'Packing List 🌲' },
    { href: '/links', label: 'Social links' },
    { href: '/faq', label: 'FAQ' },
    { href: '/suggest', label: 'Suggest' },
    {
      href: '/blog/musikkfest-2024',
      label: 'Musikkfest 2024',
    },
    {
      href: '/blog/norwegian-summer-festival-guide-2024',
      label: 'Festival Guide 2024',
    },
    { href: '/2023-wrapped', label: 'WRAPPED 2023' },
  ];

  const router = useRouter();

  return (
    <Menu
      as='div'
      className='relative z-50 inline-block text-left font-source-code-pro'
    >
      {({ open }) => (
        <>
          <Menu.Button
            aria-label='Dropdown Menu'
            className='inline-flex w-full justify-center rounded-md bg-opacity-20 px-4 py-2  text-whitish hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-whitish focus-visible:ring-opacity-75'
          >
            {open ? (
              <div className='flex items-center'>
                <p className={`uppercase text-primary`}>Menu</p>
                <RxCross1
                  className={`h-8 w-8 text-primary hover:text-primaryLight md:h-12 md:w-12`}
                  aria-hidden='true'
                />
              </div>
            ) : (
              <div className='flex items-center'>
                <p className={`uppercase text-primary`}>Menu</p>
                <AiOutlineMenu
                  className={`h-8 w-8 text-primary hover:text-primaryLight md:h-12 md:w-12 `}
                  aria-hidden='true'
                />
              </div>
            )}
          </Menu.Button>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items
              className={`absolute right-0 mt-3 w-56 origin-top-right divide-y divide-gray-100 rounded-md border border-primary bg-slate-900 shadow-lg ring-1 ring-primary ring-opacity-5 focus:outline-none`}
            >
              <div className='flex flex-col px-1 py-1'>
                {navs.map((nav) => {
                  const { href, label } = nav;
                  return (
                    <Menu.Item key={href}>
                      {({ active }) => (
                        <a
                          onClick={() => router.push(href)}
                          className={`${
                            active ? `bg-primary text-whitish` : `text-primary`
                          } group flex w-full cursor-pointer items-center rounded-md px-2 py-2 text-base uppercase`}
                        >
                          {label}
                        </a>
                      )}
                    </Menu.Item>
                  );
                })}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default MenuDropdown;
