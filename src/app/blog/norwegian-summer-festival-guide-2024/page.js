import React from 'react';
import Image from 'next/image';

import SummerFestival2024Client from '@/components/blog/SummerFestival2024Client';
import Container from '@/components/layout/Container';
import Header1 from '@/components/layout/typograhpy/Header1';
import Header2 from '@/components/layout/typograhpy/Header2';

// https://electronicgroove.com/dutch-summer-festival-guide-2024/

const articles = [
  {
    title: 'Monument',
    url: 'https://festival.mnmt.no/',
    date: '1st - 4th August',
    location: 'Veggli, Telemark',
    imageSrcs: [
      { original: '/imgs/festivalguide/mnmt/_DSC5590.jpg' },
      { original: '/imgs/festivalguide/mnmt/colors.jpeg' },
      { original: '/imgs/festivalguide/mnmt/community.jpeg' },
    ],

    imageCreds: (
      <>
        <a
          target='_blank'
          className='hover:underline'
          href='https://www.instagram.com/2alifilm/'
        >
          Ali
        </a>{' '}
        and{' '}
        <a
          target='_blank'
          className='hover:underline'
          href='https://www.instagram.com/local.phil/'
        >
          Filip
        </a>
      </>
    ),
    text: (
      <>
        Monument Festival is a four-day electronic music festival in the forests
        near Oslo, Norway. It attracts ravers and music lovers worldwide,
        offering a blend of music, nature, and community. At sunrise,
        festival-goers can enjoy yoga with ambient soundtracks and dance under
        summer skies. The immersive experience connects people with nature. By
        night, attendees gather around the fire, fostering new and old
        connections.
        <br />
        <br />
        This year&apos;s lineup features a diverse range of artists, including{' '}
        <a
          target='_blank'
          className='font-semibold hover:underline'
          href='https://ra.co/dj/wataigarashi'
        >
          Wata Igarashi
        </a>
        ,{' '}
        <a
          target='_blank'
          className='font-semibold hover:underline'
          href='https://ra.co/dj/sansibar/biography'
        >
          Sansibar
        </a>{' '}
        and{' '}
        <a
          target='_blank'
          className='font-semibold hover:underline'
          href='https://ra.co/dj/djnobu/biography'
        >
          DJ Nobu
        </a>
        .
      </>
    ),
  },
  {
    title: 'Soria Gathering',
    url: 'https://soriagathering.com/',
    date: '20th - 24th June',
    location: 'Værøy, Lofoten',
    imageSrcs: [
      { original: '/imgs/festivalguide/soria/Veroy.jpg' },
      { original: '/imgs/festivalguide/soria/acticcircle.jpg' },
      { original: '/imgs/festivalguide/soria/celebrationoflights.jpg' },
    ],
    imageCreds: (
      <a
        className='hover:underline'
        target='_blank'
        href='https://soriagathering.com/'
      >
        soriagathering.com
      </a>
    ),
    text: (
      <>
        The sun holds ritualistic significance in the Nordics, celebrated
        through solstice gatherings for thousands of years. This year&apos;s
        Soria Gathering invites attendees to the Lofoten Islands for a five-day
        festival of tribal electronic music and deep connection with Nordic
        nature. Beyond the Arctic Circle, participants celebrate the
        never-setting sun with fire, art, movement, and bass.
        <br />
        <br />
        Visitors can immerse in Værøy&apos;s raw beauty, where the festival site
        is an art piece. Attendees can rejuvenate with yoga, breath work, or
        sound-healing sessions, and join sun ceremonies. This year&apos;s lineup
        includes
        <a
          target='_blank'
          className='font-semibold hover:underline'
          href='https://ra.co/dj/andreashenneberg'
        >
          Andreas Henneberg
        </a>{' '}
        ,{' '}
        <a
          target='_blank'
          className='font-semibold hover:underline'
          href='https://ra.co/dj/Ness'
        >
          Ness
        </a>{' '}
        <a
          target='_blank'
          className='font-semibold hover:underline'
          href='https://ra.co/dj/luigitozzi'
        >
          Luigi Tozzi
        </a>{' '}
        , and{' '}
        <a
          target='_blank'
          className='font-semibold hover:underline'
          href='https://ra.co/dj/sebastianmullaert'
        >
          Sebastian Mullaert
        </a>{' '}
        .
      </>
    ),
  },
  {
    title: 'Musikkfest',
    url: 'https://musikkfest.no/',
    date: '1st June',
    location: 'Oslo',
    imageSrcs: [
      { original: '/imgs/festivalguide/musikkfest/crowd.jpg' },
      { original: '/imgs/festivalguide/musikkfest/hill.jpg' },
      { original: '/imgs/festivalguide/musikkfest/stage.jpg' },
    ],
    imageCreds: (
      <a
        className='hover:underline'
        target='_blank'
        href='https://www.instagram.com/musikkfestoslo/'
      >
        @musikkfestoslo
      </a>
    ),
    text: (
      <>
        On Saturday, June 1st, Musikkfest Oslo returns for its 32nd year. The
        entire city transforms into a festival arena with performances in
        streets, parks, squares, and public spaces. Offering a wide variety of
        free music, the event features over 50 stages and 500 artists, catering
        to all musical tastes. Let&apos;s hope for great weather this year!
        <br />
        <br />
        Enjoy an incredible lineup of artists such as{' '}
        <a
          target='_blank'
          className='font-semibold hover:underline'
          href='https://linktr.ee/uterec'
        >
          Uteklubb
        </a>{' '}
        ,{' '}
        <a
          target='_blank'
          className='font-semibold hover:underline'
          href='https://linktr.ee/streetbackboys'
        >
          Streetback Boys
        </a>
        , and
        <a
          target='_blank'
          className='font-semibold hover:underline'
          href='https://www.instagram.com/extradelicious_community/'
        >
          Extra Delicious
        </a>
        .
      </>
    ),
  },
  {
    title: 'Vårlys',
    url: 'https://www.frostlys.no/',
    date: '29th May - 2nd June',
    location: 'Herøya, Telemark',
    imageSrcs: [
      { original: '/imgs/festivalguide/vaarlys/varlysheader.jpg' },
      { original: '/imgs/festivalguide/vaarlys/mood1.jpg' },
      { original: '/imgs/festivalguide/vaarlys/mood2.jpg' },
    ],
    imageCreds: (
      <a
        className='hover:underline'
        target='_blank'
        href='https://www.instagram.com/frostlysburn/'
      >
        @frostlysburn
      </a>
    ),
    text: (
      <>
        Vårlys is a Burning Man-inspired event at Herøya in Steinsfjorden,
        inviting participants to co-create a magical weekend in the Norwegian
        landscape. Guided by the 10 principles of Burning Man, the non-profit,
        volunteer-driven festival relies on contributions from attendees.
        <br />
        <br />
        Join the five unforgettable days where dreamers create a unique cultural
        gathering. Vårlys celebrates shared experiences, inclusion,
        sustainability, and artistic exploration. Be part of Vårlys 2024 to
        ignite inspiration and foster meaningful connections.
      </>
    ),
  },
  {
    title: 'Sober Summer Beat Festival',
    url: 'https://www.facebook.com/events/670444815104746/',
    date: '8th August',
    location: 'Nesodden, Akershus',
    imageSrcs: [
      { original: '/imgs/festivalguide/summerbeat/crowd.jpg' },
      { original: '/imgs/festivalguide/summerbeat/hero.png' },
      { original: '/imgs/festivalguide/summerbeat/tent.jpg' },
    ],
    imageCreds: (
      <a
        className='hover:underline'
        target='_blank'
        href='https://www.instagram.com/sobersummerbeat/'
      >
        @sobersummerbeat
      </a>
    ),
    text: (
      <>
        At Sober Summer Beat Festival, there&apos;s something for everyone;
        health, yoga, movement, workshops and a space for people of all ages to
        come together and engage in dance, play - and most importantly, an
        amazing atmosphere!
      </>
    ),
  },
  {
    title: 'Insomnia',
    url: 'http://insomniafestival.no/',
    date: '17th - 19th October',
    location: 'Tromsø, Troms',
    imageSrcs: [
      { original: '/imgs/festivalguide/insomnia/date.png' },
      { original: '/imgs/festivalguide/insomnia/logo.png' },
    ],
    imageCreds: (
      <a
        className='hover:underline'
        target='_blank'
        href='http://insomniafestival.no/'
      >
        insomniafestival.no
      </a>
    ),
    text: (
      <>
        Since 2002, Insomnia Festival has fostered global friendships and
        innovation in electronic music as a non-profit event. It supports the
        northern electronic music scene&apos;s growth by providing a platform
        for emerging and established artists. The festival features live
        concerts, DJ events, seminars, workshops, exhibitions, performances,
        installations, and debates. The Cloud talent program, supported by SNN
        Samfunnsløftet and Talent Norway, nurtures new regional talent in
        electronic music and related arts.
      </>
    ),
  },
  {
    title: 'Ekko Festival',
    url: 'https://ekko.no/festival/ekko-festival-xx',
    date: 'November?',
    location: 'Bergen, Vestland',
    imageSrcs: [{ original: '/imgs/festivalguide/ekko/ekko.png' }],
    imageCreds: (
      <a
        className='hover:underline'
        target='_blank'
        href='https://ekko.no/festival/ekko-festival-xx'
      >
        ekko.no
      </a>
    ),
    text: (
      <>
        <span className='italic'>From 2023</span>: This year marks the 20th
        edition of Ekko, an ideological festival experiment. Ekko creates
        vibrant spaces with experimental and electronic sound, harmonizing with
        the local environment and audience. It highlights new genres and musical
        roots.
        <br />
        <br />
        Ekko promotes diverse expressions—sound art, experimental sound, and
        electronic dance music. These artistic forms feature complex themes but
        can be enjoyed without deep technical knowledge.
      </>
    ),
  },
];

const SummerFestival2024 = () => {
  return (
    <>
      {/* <Image 
        alt='Festivalguide 2024'
        blurDataURL='/imgs/festivalguide/tempfestival2blurred.jpg'
        src='/imgs/festivalguide/tempfestival2.jpg'
        width={1920}
        height={1080}
      /> */}
      <p>Full width image here</p>
      <Container className='mt-10 px-2'>
        <p>
          <time className='text-0primaryDark text-lg '>Mai 28, 2024</time>
        </p>
        <Header1 className='mt-4' text='Norwegian Summer Festival Guide 2024' />
        <Header2
          className='mt-2'
          text='A community made festival guide for norwegian electronic music in 2024.'
        />

        <SummerFestival2024Client articles={articles} />
      </Container>
    </>
  );
};

export default SummerFestival2024;
