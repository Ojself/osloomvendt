import ShortUniqueId from 'short-unique-id';

const uid = new ShortUniqueId({
  length: 10,
  dictionary: 'number',
});

const generateSlug = () => {
  return `${uid.rnd()}`;
};

const locations = [
  {
    _id: '029b50b7-69a6-44c2-a7a8-703db5fa47e6',
    name: 'Tøyenparken',
  },
  {
    _id: '081a836e-7fb3-4986-ad99-2a1370103ab8',
    name: 'Munchmuseet',
  },
  {
    _id: '0e8fa7c2-1f38-4308-86ec-e091fb7f3335',
    name: 'Goldie',
  },
  {
    _id: '12707883-0118-48e3-bbb8-63d32ccb801c',
    name: 'Harlem Bar',
  },
  {
    _id: '19606f98-1c38-4c43-a704-44885e10f8f4',
    name: 'Botsparken',
  },
  {
    _id: '1a086977-74c4-439c-ab72-949efd8ec03b',
    name: 'Storgata 26',
  },
  {
    _id: '24f6b5c6-19e0-4ead-8888-e6a130204629',
    name: 'Søre Risteigen gård',
  },
  {
    _id: '28381170-73ca-4f4a-b27d-47dd29bce3d1',
    name: 'Online',
  },
  {
    _id: '29af7372-2eaf-4f71-84b5-451be3a0d9d6',
    name: 'Casablanca',
  },
  {
    _id: '2b24c235-f592-4e2e-aeec-36e56a8462b6',
    name: 'Spaces',
  },
  {
    _id: '316e061c-363f-4c30-bbcd-5922a47188b9',
    name: 'Carls',
  },
  {
    _id: '331bd170-5d5f-402c-b6e5-21b36de1c9fb',
    name: 'Kampen Park',
  },
  {
    _id: '3bb1c0f5-3c74-4c55-8543-0a13fb602288',
    name: 'Kadettangen',
  },
  {
    _id: '3f807d56-b82c-424d-a250-01c8f50523ee',
    name: 'Elgsletta',
  },
  {
    _id: '43e5fcbf-200b-4c92-b84f-3331c6dc5090',
    name: 'Folk i Storgata',
  },
  {
    _id: '43fb05a5-aba1-4a8a-8606-6c641b7cc714',
    name: 'Pollett',
  },
  {
    _id: '45e4c6f2-9ffa-41d0-a200-7789355c6c65',
    name: 'Pigalle',
  },
  {
    _id: '47c81029-7edd-45d9-baeb-b223daa5d4b0',
    name: 'Dead Poets',
  },
  {
    _id: '4a2f1b03-fba6-4202-b40e-0893b11d879a',
    name: 'Økernsenteret',
  },
  {
    _id: '4fee3615-5467-45c5-aa3c-f2ba47bc2165',
    name: 'Olaf Bulls plass',
  },
  {
    _id: '56b2d9c9-0d3c-4c4e-b23d-4d99fb587cf3',
    name: 'Rom for dans',
  },
  {
    _id: '63eaa716-f3c7-439f-9d57-599eae3e3fcf',
    name: 'TBA',
  },
  {
    _id: '64abc5b4-4521-4a9c-aeca-1f351f58d78b',
    name: 'S/S Lady Mack',
  },
  {
    _id: '6619287e-9104-41d1-8a7c-beba5237128a',
    name: 'Secret - forest',
  },
  {
    _id: '67e22175-59ad-48a9-be02-8ee359c5c65f',
    name: 'Oslo Rede',
  },
  {
    _id: '68287632-7bb4-4097-8c42-804a71e3be76',
    name: 'Eventyrbrua',
  },
  {
    _id: '6a767954-c7c2-4ec0-9aa3-71c771e4e783',
    name: 'Taket',
  },
  {
    _id: '74cda0f3-1729-4c47-98d8-9fbadb87afe7',
    name: 'Nydalen Fabrikker',
  },
  {
    _id: '7c2caf49-2057-41d9-838d-2d5a83c42925',
    name: 'Oslo Badstuforening',
  },
  {
    _id: '8130eaac-ff07-4a09-a911-8239326564b7',
    name: 'Smelteverket',
  },
  {
    _id: '974d524c-d537-4287-b1ac-ade7353b1357',
    name: 'Oslo Konserthus',
  },
  {
    _id: '9a412919-b22f-4f45-86fc-5182b8869da9',
    name: 'Cementen',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrjXL',
    name: '3KT',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrjcI',
    name: 'Alexandria Live Sports',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrjhF',
    name: 'Angels Place',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrjmC',
    name: 'Baba Bar',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrjr9',
    name: 'Becco',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrjw6',
    name: 'Blå',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrk13',
    name: 'Blitz',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrk60',
    name: 'Boksen',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrkAx',
    name: 'Brød og sirkus',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrkFu',
    name: 'Bortenfor',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrkKr',
    name: 'Byens Tak',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrkPo',
    name: 'ByMad',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrkUl',
    name: 'Caña',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrkZi',
    name: 'Chateau Neuf',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrkef',
    name: 'Club Aldri',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrkjc',
    name: 'Dattera til Hagen',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrkoZ',
    name: 'Den Halve',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrktW',
    name: 'Det Gamle Biblioteket',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrkyT',
    name: 'Dogyard',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrl3Q',
    name: 'Dunk Oslo',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrl8N',
    name: 'Utsikten',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrlDK',
    name: 'Einbar',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrlIH',
    name: 'Eventhallen',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrlNE',
    name: '🌲🌲🌲',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrlSB',
    name: 'Fuglen',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrlc5',
    name: 'Gehør',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrlh2',
    name: 'Godthåb',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrllz',
    name: 'Hagen',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrlvt',
    name: 'Håndslag',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrm0q',
    name: 'Hausmania',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrm5n',
    name: '100',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrmAk',
    name: 'Hør Hør',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrmFh',
    name: 'Indigo',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrmKe',
    name: 'Ingensteds',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrmPb',
    name: 'Internasjonalen',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrmUY',
    name: 'Jæger',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrmZV',
    name: 'John Dee',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrmeS',
    name: 'Juret',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrmjP',
    name: 'Kafé Hærverk',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrmoM',
    name: 'Kafeteria August',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrmtJ',
    name: 'Krøsset',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrmyG',
    name: 'Kulturhuset',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrn3D',
    name: 'Kulturkirken Jakob',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrn8A',
    name: 'Middelalderparken',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrnD7',
    name: 'Mir',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrnI4',
    name: 'MS Bjørvika',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrnN1',
    name: 'Nedpaa',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrnRy',
    name: 'Nettarrangement',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrnWv',
    name: 'No. 53',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrnbs',
    name: 'Oslo',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrngp',
    name: 'Oslo Scene',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrnlm',
    name: 'Oslo Spektrum',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrnqj',
    name: 'Oslo Street Food',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrnvg',
    name: 'Oslo Velo',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGro0d',
    name: 'Ostara',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGroAX',
    name: 'Pakkhuset',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGroFU',
    name: 'Parkteatret',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGroKR',
    name: 'Parksalongen',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGroPO',
    name: 'Podium',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGroUL',
    name: 'Pokalen',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGroZI',
    name: 'Prindsen hage',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGroeF',
    name: 'Rampen',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrojC',
    name: 'The Red Room',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGroo9',
    name: 'Revier',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrot6',
    name: 'Revolver',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGroy3',
    name: 'Riksscenen',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrp30',
    name: 'Rockefeller',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrp7x',
    name: 'Leiligheten',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrpCu',
    name: 'Røverstaden',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrpHr',
    name: 'Salt',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrpMo',
    name: 'Sentralen',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrpRl',
    name: 'Skaugum',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrpWi',
    name: 'Skatten',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrpbf',
    name: 'Barcode Street Food',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrpgc',
    name: 'OTOTO',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrplZ',
    name: 'Skogen Torggata 10',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrq0Q',
    name: '200',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrq5N',
    name: 'Torget',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrqAK',
    name: 'Torshovdalen',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrqFH',
    name: 'Trekanten',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrqKE',
    name: 'Uhørt',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrqPB',
    name: 'Villa',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrqU8',
    name: 'Vin Vin',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrqZ5',
    name: 'Vippa',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrqe2',
    name: 'Vulkan',
  },
  {
    _id: 'TTQ8WtKcOLk3QZsITGrqiz',
    name: 'Youngs',
  },
  {
    _id: 'a67324e7-d326-4f3e-907f-2be10eba73b0',
    name: 'Nesoddtangen',
  },
  {
    _id: 'ad1cea68-4d20-497d-9372-a4675880a9ee',
    name: 'Bar 35',
  },
  {
    _id: 'c932ad02-f13d-447b-8881-1848c0df3218',
    name: 'Høymagasinet',
  },
  {
    _id: 'cf2b5dbd-3caa-403c-a625-3c41384c2c06',
    name: 'Nedpaa',
  },
  {
    _id: 'd0f18627-a2e1-4717-a72f-b8aa9f824986',
    name: 'Blåveis',
  },
  {
    _id: 'd3f93cb2-6eec-493b-bef1-96722e45c8b5',
    name: 'Torshovparken',
  },
  {
    _id: 'e59daf8e-ea2e-4e96-80e6-45b09f3e2571',
    name: 'Secret',
  },
  {
    _id: 'f1c8b482-5f67-489c-b0dd-5667ab980d68',
    name: 'BAR Vulkan',
  },
  {
    _id: 'f1ff8c9d-389f-4aeb-a5d7-a5057ed6d347',
    name: 'Melahuset',
  },
  {
    _id: 'f41adb9c-7261-47ea-b990-19a2f542eaca',
    name: 'Dangerous Club',
  },
];

const formattedEvent = {
  _type: 'event',
  name: 'Back2Basic allnighter presents: Droplex!',
  startDate: '2023-12-25T21:30:00.000Z', // ISO format with time component
  location: {
    _type: 'reference',
    _ref: 'location-id-for-Eventhallen', // Replace with actual Sanity location ID
  },
  url: 'https://fb.me/e/1IqizFEeA',
  highlight: false, // Add if specified in your source object
  slug: {
    _type: 'slug',
    current: generateSlug(), // Call your slug generation function
  },
  eventStatus: 'EventScheduled',
  eventAttendanceMode: 'OfflineEventAttendanceMode',
};
