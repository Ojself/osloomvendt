import React from 'react';

import ConstDayClient from '@/components/blog/ConstDayClient';

const events = [
  {
    location: 'Baba Bar',
    url: 'https://www.facebook.com/events/1105163710812564/',
    name: 'PlayFuel 17mai',
    startDate: '2024-05-17T19:00:00.000Z',
  },
  {
    url: 'https://www.facebook.com/events/383240044603535/',
    name: '17:Mai // Ingensteds // Bortenfor // Ovenpå',
    startDate: '2024-05-17T10:00:00.000Z',
    location: 'Ingensteds',
  },
  {
    name: '17 Mai: Skatebård + g-HA &amp; Olanskii + Simon Field + Monojack + Schmooze & Brus + French Voyage +++',
    startDate: '2024-05-17T20:00:00.000Z',
    location: 'Jæger',
    url: 'https://fb.me/e/21QYEwF0F',
  },
  {
    name: '100th of May - fest i Olaf Bulls Plass',
    startDate: '2024-05-17T10:00:00.000Z',
    location: 'Olaf Bulls plass',
    url: 'https://www.facebook.com/events/384129987897083/',
  },
  {
    name: 'OTOTO presents: 17 OF MAY - EPIFANOV - SAUL SANCHEZ - AMO',
    startDate: '2024-05-17T17:00:00.000Z',
    location: 'OTOTO',
    url: 'https://www.facebook.com/events/320037924217293/',
  },
  {
    name: 'Extra Delicious - 17 May',
    startDate: '2024-05-17T20:00:00.000Z',
    location: 'Pakkhuset',
    url: 'https://www.facebook.com/events/1526207154598663/',
  },
  {
    startDate: '2024-05-17T09:00:00.000Z',
    location: 'Prindsen hage',
    url: 'https://www.facebook.com/events/323185930266059/',
    name: '17. mai hos Prindsen Hage',
  },
  {
    name: 'NACHonaldagen - Det Gode Selskab // DJ-Maraton // 17. mai',
    startDate: '2024-05-17T19:00:00.000Z',
    location: 'Rockefeller',
    url: 'https://www.facebook.com/events/425009146593748/',
  },
  {
    name: 'KLUBBSAFARI 17. mai // Storgata 26 // Bakgården & Stallen',
    startDate: '2024-05-17T18:00:00.000Z',
    location: 'Storgata 26',
    url: 'https://www.facebook.com/events/3724939037787484/',
  },
  {
    name: 'NEW ERA 17th Mai Klubbnacht / Rikhter (Live)',
    startDate: '2024-05-17T20:00:00.000Z',
    location: 'Villa / Secret',
    url: 'https://fb.me/e/1u6u4OQN9',
  },
];

const ConstDay = () => {
  return <ConstDayClient events={events} />;
};

export default ConstDay;
