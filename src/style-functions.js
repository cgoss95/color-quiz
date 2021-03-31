/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import DATA from './data';
import { jsx, css } from '@emotion/react';

export const getRandomAngle = () => Math.random() * 360;
export const getRandomHex = () => (Math.random() * 255 ** 3).toString(16).slice(0, 6);

export const randGradientBg = () => css`
  border: 2px solid red;
  background-image: linear-gradient(${getRandomAngle()}deg, #${getRandomHex()}, #${getRandomHex()});
`;

const coolEmojis = ['😀', '🥺', '🤬', '😄', '🤣', '🤠', '👺', '👅', '🎒'];

export const resultPageStyle = [
  { backgroundColor: '#A11111', color: 'white' },
  { backgroundColor: '#1141A1', color: 'white' },
  { backgroundColor: '#F3E13D', color: 'black' },
  { backgroundColor: '#6d914d', color: 'white' },
  { backgroundColor: 'black', color: 'white' },
];

// const newRandGradientBg = () => css`
//   background-image: linear-gradient(${getRandomHex()}deg, #${getRandomHex()}, #${getRandomHex});
// `;

// export const randGradientBg = () => {
//   var randomAngle = Math.random() * 360;
//   var randomHex1 = (Math.random() * 255 ** 3).toString(16).slice(0, 6);
//   var randomHex2 = (Math.random() * 255 ** 3).toString(16).slice(0, 6);
//   var linearGradient = 'linear-gradient(' + randomAngle + 'deg, #' + randomHex1 + ', #' + randomHex2 + ')';
//   return { backgroundImage: linearGradient };
// };

export const getResultCardsStyle = (resultNumber) => {
  let resultCardStyle = {};
  switch (resultNumber) {
    case 0:
      resultCardStyle = { backgroundColor: '#A11111', color: 'white' };
      break;
    case 1:
      resultCardStyle = { backgroundColor: '#1141A1', color: 'white' };
      break;
    case 2:
      resultCardStyle = { backgroundColor: '#F3E13D', color: 'black' };
      break;
    case 3:
      resultCardStyle = { backgroundColor: '#6d914d', color: 'white' };
      break;
    case 4:
      resultCardStyle = { backgroundColor: 'black', color: 'white' };
      break;
    default:
      break;
  }
  return resultCardStyle;
};

export const getResultPageStyle = (rNum) => {
  return [
    { backgroundColor: '#A11111', color: 'white' },
    { backgroundColor: '#1141A1', color: 'white' },
    { backgroundColor: '#F3E13D', color: 'black' },
    { backgroundColor: '#6d914d', color: 'white' },
    { backgroundColor: 'black', color: 'white' },
  ][rNum];
};

export const screenBg = (level, winningResult) => {
  if (level === 0) {
    return {
      backgroundImage: 'linear-gradient(45deg, #878CA6, #6298FE)',
    };
  } else if (level === DATA.length - 1) {
    return getResultCardsStyle(winningResult);
  }
  return randGradientBg();
};


export const FlyingStars = ({ isRandomized = false }) => {
  let flyingStars = [];
  let character = '*';
  if (isRandomized) {
    const emoji_i = Math.floor(Math.random() * coolEmojis.length);
    character = coolEmojis[emoji_i];
  }

  for (let i = 0; i < 100; i++) {
    let star = (
      <div
        className="flying-stars"
        key={`flying-star-${i}`}
        style={{
          position: 'absolute',
          left: (Math.random() * 1000 - 1050) * 2,
          top: (Math.random() * 1000 - 1050) * 2,
        }}
      >
        {character}
      </div>
    );
    flyingStars.push(star);
  }
  return <div>{flyingStars}</div>;
};
