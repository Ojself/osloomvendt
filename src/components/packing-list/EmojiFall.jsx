import React from 'react';
import Snowfall from 'react-snowfall';

const emojiSrcs = [
  '/emojis/blue_heart.png',
  '/emojis/clown_face.png',
  '/emojis/cookie.png',
  '/emojis/evergreen_tree.png',
  '/emojis/female_fairy.png',
  '/emojis/mermaid.png',
  '/emojis/person_in_lotus_position.png',
  '/emojis/pizza.png',
  '/emojis/racehorse.png',
  '/emojis/sunny.png',
  '/emojis/swimmer.png',
  '/emojis/teddy_bear.png',
  '/emojis/hamburger.png',
  '/emojis/one_piece_swimsuit.png',
  '/emojis/bubbles.png',
  '/emojis/heart_hands.png',
  '/emojis/sparkles.png',
  '/emojis/musical_note.png',
  '/emojis/people_hugging.png',
  '/emojis/cocktail_glass.png',
  '/emojis/sushi.png',
];
const EmojiFall = () => {
  const emojiElements = emojiSrcs
    .map((_) => document.createElement('img'))
    .map((emojiElement, i) => {
      emojiElement.src = emojiSrcs[i];
      return emojiElement;
    });

  return (
    <Snowfall
      speed={[0.05, 0.1]}
      wind={[-0.05, 0.1]}
      rotationSpeed={[0.01, 0.02]}
      snowflakeCount={50}
      images={emojiElements}
      radius={[20, 35]}
    />
  );
};

export default EmojiFall;
