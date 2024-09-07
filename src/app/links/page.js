import React from 'react';
import { BsFacebook, BsInstagram, BsPaypal, BsThreads } from 'react-icons/bs';
import { FaPatreon } from 'react-icons/fa';
import { SiSoundcloud } from 'react-icons/si';
import Image from 'next/image';

import currentWeekNumber from 'current-week-number';
import { SOCIALS } from '@/utils/consts';
import SocialLink from '@/components/links/SocialLink';
import LinkButton from '@/components/links/LinkButton';
import Container from '@/components/layout/Container';

const links = [
  {
    href: '/',
    children: <>OsloOmvendt.no</>,
    large: true,
  },

  {
    href: `/week/${currentWeekNumber()}`,
    children: <>Week {currentWeekNumber()} events</>,
  },
  {
    href: '/shop',
    children: <>Merch</>,
  },
  {
    href: SOCIALS.patreon,
    children: (
      <>
        <span className='mr-1 text-xl'>🤝</span> Patreon
      </>
    ),
  },
  {
    href: '/packing-list',
    children: (
      <>
        Packing List <span className='ml-1 text-lg'> 🌲</span>
      </>
    ),
  },
  {
    href: SOCIALS.instagram,
    children: <>Instagram</>,
  },

  {
    href: SOCIALS.paypal,
    children: (
      <>
        <span className='mr-1 text-lg'>🙏</span> PayPal
      </>
    ),
  },
  /* {
    href: '/blog/17may-2024',
    children: <>🇳🇴 17. mai-program</>,
  },
  {
    href: '/blog/musikkfest-2024',
    children: <>Musikkfest 2024</>,
  },
  {
    href: '/blog/norwegian-summer-festival-guide-2024',
    children: <>Festival Guide 2024</>,
  }, */
  {
    href: '/2023-wrapped',
    children: <>2023 WRAPPED</>,
  },
];

const iconClassName =
  'text-blackish transition duration-200 hover:text-primaryDark';
const iconSize = 23;

const socialLinks = [
  {
    ariaLabel: 'Support us on Patreon',
    href: SOCIALS.patreon,
    icon: <FaPatreon className={iconClassName} size={iconSize} />,
  },
  {
    ariaLabel: 'Visit us on Threads',
    href: SOCIALS.threads,
    icon: <BsThreads className={iconClassName} size={iconSize} />,
  },
  {
    ariaLabel: 'Visit us on Instagram',
    href: SOCIALS.instagram,
    icon: <BsInstagram className={iconClassName} size={iconSize} />,
  },
  {
    ariaLabel: 'Support us through Paypal',
    href: SOCIALS.paypal,
    icon: <BsPaypal className={iconClassName} size={iconSize} />,
  },
  {
    ariaLabel: 'Visit us on Facebook',
    href: SOCIALS.facebook,
    icon: <BsFacebook className={iconClassName} size={iconSize} />,
  },
  {
    ariaLabel: 'Visit us on Soundcloud',
    href: SOCIALS.soundcloud_playlist,
    icon: <SiSoundcloud className={iconClassName} size={iconSize} />,
  },
];

const Links = () => {
  return (
    <Container size='sm' className='flex flex-col items-center'>
      <div>
        <Image
          className='rounded-full'
          src='/imgs/OO_logo.jpg'
          alt="Oslo Omvendt's logo"
          height={100}
          width={100}
        />
      </div>
      <a
        target='_blank'
        aria-label='Visit us on Instagram'
        rel='noopener noreferrer'
        href={SOCIALS.instagram}
      >
        <h1 className='mb-6 mt-2 text-2xl font-medium text-blackish'>
          @osloomvendt
        </h1>
      </a>
      <div className='flex w-full flex-col items-center '>
        <div className='flex h-10 w-full justify-between'>
          {socialLinks.map((socialLink) => (
            <React.Fragment key={socialLink.href}>
              <SocialLink
                href={socialLink.href}
                ariaLabel={socialLink.ariaLabel}
                icon={socialLink.icon}
              />
            </React.Fragment>
          ))}
        </div>
        {links.map((link) => (
          <React.Fragment key={link.href}>
            <LinkButton href={link.href} large={link.large}>
              {link.children}
            </LinkButton>
          </React.Fragment>
        ))}
      </div>
    </Container>
  );
};

export default Links;
