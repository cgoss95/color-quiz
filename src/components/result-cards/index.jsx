import React from 'react';
import { jsx, css } from '@emotion/react';

const redStyle = css`
  color: white;
  background-color: #A11111;
`;

const blueStyle = css`
  color: white;
  background-color: #1141A1;
`;

const yellowStyle = css`
  color: black;
  background-color: #F3E13D;
`;

const greenStyle = css`
  color: white;
  background-color: #6d914d;
`;

const blackStyle = css`
  color: white;
  background-color: black;
`;

export const resultPageStyle = [
  redStyle,
  blueStyle,
  yellowStyle,
  greenStyle,
  blackStyle
];

export const Red = () => (
  <div className={redStyle}>
    <h1>You're red!</h1>
    <p>Good job! This is a good color.</p>
  </div>
);

export const Blue = () => (
  <div className={blueStyle}>
    <h1>You are the color BLUE.</h1>
    <p>Haha! Thought you were going to get red, didn't you? You're probably not the type to expect the unexpected. Sad!</p>
  </div>
);

export const Yellow = () => (
  <div className={yellowStyle}>
    <h1>You are the color YELLOW.</h1>
    <p>
      This is a pretty good indication you're a Gryffindor. I'm a Hufflepuff and <span className="underline">I strongly dislike</span> Gryffindors. Navigate to your browser's corresponding ❌ button
      to get your big hiney OUT of here!!*
    </p>
    <div className="results-subtext-1">
      *This result brought to you by the "Huff'N'Puff HP Potterhead Potheads"** group on Facebook so look us up. We're accepting applications for new mods. keep it 💯!!
    </div>
    <div className="results-subtext-2">(**not an actual facebook group)</div>
  </div>
);

export const Green = () => (
  <div className={greenStyle}>
    <h1>You are the color GREEN.</h1>
    <p>
      Riding the waves of life, you are constantly searching for a purpose. Before, you were asleep. But now, you are awake. Your eyes were closed but now you see. That door that was previously closed
      is now open. You miss 100% of the shots you don't take. Get out there. Otherwise, you'll stay inside.
    </p>
  </div>
);

export const Black = () => (
  <div className={blackStyle}>
    <h1>You are the color BLACK.</h1>
    <p>Black. You're a contrarian: Edgy and disagreeable. You have encountered many life complications due to your personality defects.</p>
  </div>
);
