'use client';
import React, { useState } from 'react';
import Creatable from 'react-select';
import currentWeekNumber from 'current-week-number';
import {
  AiOutlineArrowDown,
  AiOutlineLoading3Quarters,
  AiOutlineCheck,
} from 'react-icons/ai';
import axios from 'axios';

import fakeEvents from '@/data/fakeEvents.json';
import { addNDayToEvent, getWeekDay } from '@/utils';
import SubmitPreview from '@/components/suggest/SubmitPreview';
import { MONTHS, SOCIALS } from '@/utils/consts';
import Container from '../layout/Container';
import LinkedBanner from '../layout/LinkedBanner';

const SuggestClient = ({ data }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState({ label: 'Select..', value: '' });
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [checkBox, setCheckBox] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSuggest = async (e) => {
    e.preventDefault();

    setLoading(true);
    let res;
    const text = `{ \\n 'startDate': '${startDate.toLocaleDateString(
      'en-US'
    )}', \\n 'name': '${name}', \\n 'location': '${
      location.value
    }', \\n 'url': '${url}', \\n }, \\n message: ${message} \\n `;

    try {
      await axios.post('/api/notify/slack', {
        notificationType: 'new_suggestion',
        data: text,
      });
      res = await axios.post('/api/notify/pm-email', {
        text,
        subject: 'New suggestion: ' + new Date().toString(),
      });
      setSuccessMessage('Your suggestion has been sent!');
    } catch (e) {
      setError(e?.message);
    }
    setLoading(false);
    if (res && res.status === 200) {
      setTimeout(() => {
        setSuccessMessage('');
        setName('');
        setLocation({ label: 'Select..', value: '' });
        setUrl('');
        setMessage('');
        setStartDate(new Date());
        setCheckBox(false);
      }, 5000);
    } else {
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };

  const suggestButtonIsDisabled = () => {
    return (
      name === '' || location === '' || date === '' || url === '' || !checkBox
    );
  };
  const buttonFont = suggestButtonIsDisabled()
    ? 'text-gray-500 bg-secondary font-thin'
    : 'text-blackish font-semibold bg-secondaryDark';

  const eventToBeSuggested = {
    startDate: startDate,
    name: name || 'Amelie Lens',
    location: location.value || 'Ekebergsletta',
    url: url || 'https://www.instagram.com/osloomvendt',
  };

  fakeEvents[0] = eventToBeSuggested;
  const formattedFakeEvents = fakeEvents.map((e, i, self) => ({
    ...e,
    startDate: addNDayToEvent(new Date(self[0].startDate), i),
  }));

  const allFakeEventDates = Array.from(
    new Set(
      formattedFakeEvents.map((e) => e.startDate.toLocaleDateString('nb-NO'))
    )
  );
  const currentWeek = currentWeekNumber(startDate);
  const locationOptions = data.map((location) => ({
    value: location.name,
    label: location.name,
  }));

  const dateMonthString = startDate.toLocaleDateString('en-US', {
    month: 'long',
  });

  return (
    <Container>
      <h1 className='text-xl font-bold md:text-2xl'>Suggest your event</h1>
      <form className='mt-2 flex flex-col  font-source-code-pro'>
        <div className='flex w-full flex-col justify-between md:flex-row '>
          <div className='mr-0 flex w-full flex-col md:mr-2'>
            <label htmlFor='event-name'>Event Name</label>
            <input
              type='text'
              className='mb-4 rounded bg-whitish py-2 pl-2 text-blackish placeholder-slate-500'
              id='event-name'
              value={name}
              placeholder={'Amelie Lens @ Ekebergsletta'}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='ml-0 flex w-full flex-col text-left md:ml-2  md:text-right'>
            <label htmlFor='location'>Location</label>
            <Creatable
              value={location}
              styles={{
                control: (provided) => ({
                  ...provided,

                  backgroundColor: '#F7FAFC',
                }),
              }}
              onChange={(option) => setLocation(option)}
              className='mb-4 text-blackish'
              options={locationOptions}
            />
          </div>
        </div>
        <div className='flex w-full flex-col justify-between md:flex-row '>
          <div className='mr-0 flex w-full flex-col md:mr-2 '>
            <label htmlFor='date'>Date</label>
            <input
              type='date'
              id='date'
              value={new Date(startDate)
                .toISOString()
                .replace(/T.*/, '')
                .split('-')
                .join('-')}
              className='mb-4 bg-whitish py-2 pl-2 text-blackish'
              onChange={(e) => setStartDate(new Date(e.target.value))}
            />
          </div>
          <div className='ml-0 flex w-full flex-col md:ml-2'>
            <label className='text-left md:text-right' htmlFor='url'>
              Url
            </label>
            <input
              type='text'
              id='url'
              className='mb-4 rounded bg-whitish py-2 pl-2 text-left text-blackish placeholder-slate-500 md:text-right'
              value={url}
              placeholder='https://fb.me/e/80BVBCRAA'
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
        </div>
        <label htmlFor='message'>Aditional Message</label>
        <textarea
          maxLength='255'
          id='message'
          placeholder='Add a message - maybe who you are?'
          className='mb-4 rounded bg-whitish py-2 pl-2 text-blackish placeholder-slate-500'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div>
          <input
            className='mr-2 h-5  w-5 accent-tertiary'
            type='checkbox'
            id='isTechnoEvent'
            name='isTechnoEvent'
            checked={checkBox}
            onChange={() => setCheckBox(!checkBox)}
          />
          <label htmlFor='isTechnoEvent'>
            This is a techno, drum and bass, house event or something alike
          </label>
        </div>
        <div>
          <div className='flex'>
            <button
              disabled={suggestButtonIsDisabled()}
              onClick={(e) => handleSuggest(e)}
              className={` m-2 rounded-md  px-2 py-1 font-source-code-pro text-sm md:px-4 md:py-2 md:text-base ${buttonFont}`}
            >
              Suggest
            </button>
            {loading && (
              <AiOutlineLoading3Quarters className='mr-0 animate-spin self-center md:mr-2' />
            )}
            {successMessage && (
              <AiOutlineCheck className='self-center text-secondary' />
            )}
          </div>
          <p className='h-4 text-error'>{error}</p>
          <p className='h-4 text-secondary'>{successMessage}</p>
          <p className='mt-2 text-xs'>
            After suggesting, please allow 2-3 hours for your event to appear on
            our website.
          </p>
          <p className='mt-2 text-xs'>
            Don&apos;t want to fill out a form? Send us the event link on{' '}
            <a
              target='_blank'
              className='inline font-semibold hover:underline'
              rel='noopener noreferrer'
              href={SOCIALS.instagram}
            >
              Instagram
            </a>{' '}
            and we&apos;ll take care of the rest!
          </p>
        </div>
      </form>
      <section className='mt-24'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col '>
            <h2 className='text-4xl uppercase md:text-5xl lg:text-6xl'>
              {MONTHS[dateMonthString]}
            </h2>
            <h3 className='mb-12 text-3xl md:text-4xl lg:text-5xl'>
              [UKE {isNaN(currentWeek) ? 'x' : currentWeek}]
            </h3>
          </div>
          <div className='flex'>
            <AiOutlineArrowDown className='animation mr-2 mt-4 animate-bounce text-2xl' />

            <h2 className='text-4xl uppercase text-gray-500 md:text-5xl lg:text-6xl'>
              Preview
            </h2>
          </div>
        </div>
        {allFakeEventDates.map((d, i) => {
          const weekDay = getWeekDay(d);
          const eventsForDate = formattedFakeEvents.filter((e) => {
            return e.startDate.toLocaleDateString('nb-NO') === d;
          });

          return (
            <SubmitPreview
              key={`${d}-${i}`}
              fakeEvents={eventsForDate}
              weekDay={weekDay}
              date={d}
            />
          );
        })}
        <div className='mt-8 flex flex-row-reverse py-8'>
          <LinkedBanner />
        </div>
      </section>
    </Container>
  );
};

export default SuggestClient;
