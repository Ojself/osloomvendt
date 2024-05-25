'use client';
import React, { useState } from 'react';

import { IoWater } from 'react-icons/io5';
import {
  BsStars,
  BsFillBandaidFill,
  BsTreeFill,
  BsSunFill,
  BsFillHeartFill,
} from 'react-icons/bs';
import { TbChairDirector } from 'react-icons/tb';
import { FaUserFriends } from 'react-icons/fa';
import { AiFillBug } from 'react-icons/ai';
import { HiArrowUp } from 'react-icons/hi';

import EmojiFall from './EmojiFall';
import Container from '@/components/layout/Container';
import GuidelineListItem from './GuidelineListItem';
import guideLines from '@/data/guideLines';
import UnorderedPackingList from './UnorderedPackingList';
import Header1 from '../layout/typograhpy/Header1';
import Header2 from '../layout/typograhpy/Header2';
import Header5 from '../layout/typograhpy/Header5';
import Header4 from '../layout/typograhpy/Header4';

const iconStyle = 'text-lg mt-1';

const PackingListClient = ({
  essentialsForSurvival,
  outdoorComfortAndRecreation,
  healthAndSafety,
  enjoymentAndFun,
}) => {
  const [somethingUpdated, setSomethingUpdated] = useState(false);
  const [easterEggActivated, setEasterEggActivated] = useState(false);
  const handleResetLocalStorage = (e) => {
    e.preventDefault();
    const keys = Object.keys(localStorage);
    keys.forEach((key) => {
      if (key.includes('oo-packing-list')) {
        localStorage.removeItem(key);
      }
    });
    setSomethingUpdated(!somethingUpdated);
  };

  const handleEasterEgg = () => {
    setEasterEggActivated(!easterEggActivated);
    setSomethingUpdated(!somethingUpdated);
  };

  return (
    <>
      {easterEggActivated && <EmojiFall />}
      <Container>
        <div className='mb-4'>
          <div className='flex items-center justify-between'>
            <div className='text-6xl'>🌲</div>
            <div className=''>
              <div className='mb-6'>
                <Header1 className='text-center' text='Forest rave' />
              </div>
              <div className='mb-6'>
                <Header2 className='text-center' text='packing list' />
              </div>
            </div>
            <div className='text-6xl'>🌲</div>
          </div>
          <div>
            <Header5 text='The ultimate packing list for forest raves' />
            <p className='text-xs '>- Made by the community</p>
          </div>
        </div>
        <section className='mb-12'>
          <div>
            <div className='grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2'>
              <UnorderedPackingList
                somethingUpdated={somethingUpdated}
                items={essentialsForSurvival}
                iconLeft={<IoWater className={iconStyle} />}
                iconRight={<BsFillBandaidFill className={iconStyle} />}
                title='Essential for Survival'
              />

              <UnorderedPackingList
                somethingUpdated={somethingUpdated}
                items={outdoorComfortAndRecreation}
                iconLeft={<BsTreeFill className={iconStyle} />}
                iconRight={<TbChairDirector className={iconStyle} />}
                title='Comfort and Recreation'
              />

              <UnorderedPackingList
                somethingUpdated={somethingUpdated}
                items={healthAndSafety}
                iconLeft={<BsSunFill className={iconStyle} />}
                iconRight={<AiFillBug className={iconStyle} />}
                title='Health and Safety'
              />

              <UnorderedPackingList
                somethingUpdated={somethingUpdated}
                items={enjoymentAndFun}
                iconLeft={
                  easterEggActivated ? (
                    <HiArrowUp
                      className={`${iconStyle} temporary-bounce animate-bounce`}
                    />
                  ) : (
                    <BsStars className={iconStyle} />
                  )
                }
                iconRight={
                  easterEggActivated ? (
                    <BsFillHeartFill className={iconStyle} />
                  ) : (
                    <FaUserFriends
                      onClick={() => handleEasterEgg()}
                      className={iconStyle}
                    />
                  )
                }
                title='Enjoyment and Fun'
              />
            </div>
            <div className='mb-6 mt-4'>
              <button
                onClick={handleResetLocalStorage}
                className='rounded-md border px-4 py-2  hover:border-primary'
              >
                Reset
              </button>
            </div>
            <div>
              <Header4 text='Co-creating an epic rave together' />

              <p className='mb-6 text-sm'>
                Keep this in mind when partying in the forest this summer
              </p>

              <ul className='list-disc'>
                {guideLines.map((guideLineItem) => (
                  <React.Fragment key={guideLineItem.title}>
                    <GuidelineListItem title={guideLineItem.title}>
                      {guideLineItem.children}
                    </GuidelineListItem>
                  </React.Fragment>
                ))}
              </ul>
              <p className='mt-6'>
                <span className='italic'>Remember</span>, the forest party is a
                collective experience, and by adhering to these guidelines, we
                can create an unforgettable and harmonious celebration in the
                woods.
              </p>
              <p className='mt-1'>See you on the dancefloor! ✨</p>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default PackingListClient;
