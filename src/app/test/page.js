import IgQuestionAnswer from '@/components/test/IgQuestionAnswer';
import React from 'react';

const answers = [
  'Monument!',
  'Soria and Monument 😍',
  'Monument!',
  'Trevarefest i Lofoten 🥰🏔️',
  'Monument',
  'Stone Techno 🥳',
  'Butik',
  'Soria',
  'Musikkfest og Vårlys',
  'Sober beat og Insomnia',
  'Soria!',
  'Vårlys',
  'Monument',
  'Veggli bby ✨',
  'Musikkfest',
  'Ozora ❤️❤️❤️',
  'Distortion copenhagen',
  'Monument',
  'mnmnt/øya',
  'Tons',
  'Ekko i Bergen!',
  'Mnmt og Insomnia',
  'Fallofestivalen i Klitten på Færvik',
  'Sober Summer Beat',
  'Monument!',
  'Musikkfest! ',
  'Soria',
  'Sober Beat og Monument',
  'Ekkofestivalen 🫡🫡',
  'Snusk og lem festival i Flåm',
  'Monument!!!',
  'Kosefestivalen',
  'Musikkfestivalen av ditt pulserende hjerte 💋',
  'Vårlys og musikkfest ✨🌸🌞😎🥵🕶️🧴🎤🌻🪐',
  'Monument',
  'Tomorrowland',
  'Insomniafestivalen ☠️',
  'Monumeeeent ❤️❤️❤️❤️❤️',
  'Monument 🔥🔥🔥',
  'Vårlys og mnmt 🖤🧡',
  'Soria',
  'Øya & Monument(forhåpentligvis)',
  'All of them',
  'Monument 🥹🙏',
  "Defqon1, so w'happy and sana duri. And many small in Norway",
  'Hvem trenger festivaler når det er skogs-raves hver eneste helg 🤩',
  'Defected Croatia 🎛️ 🏝️ 🎚️',
  'Monument, Soria gathering',
  'Tons of rock',
  'Monument',
  'Monument, bergtatt',
  'Distortion, Noisly and Monument 🤩',
  'Stone Techno Festival',
  "Can't afford attending any 🥺",
  'Monument 🖤',
];

const Test = () => {
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }
  return (
    <div className='flex w-full flex-row flex-wrap '>
      {answers.map((a) => (
        <IgQuestionAnswer
          key={a}
          q={'Which music festival are you attending this summer?'}
          a={a}
        />
      ))}
    </div>
  );
};

export default Test;
