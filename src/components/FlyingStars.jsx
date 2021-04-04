/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';

const  emojis = ['😀', '🥺', '🤬', '😄', '🤣', '🤠', '👺', '👅', '🎒'];

const starStyle = () => css`
  position: absolute;
  left: ${(Math.random() * window.innerWidth - window.innerWidth) * 2}px;
  top: ${(Math.random() * window.innerHeight - window.innerHeight) * 2}px;
`;

const FlyingStars = ({ emojiMode = false }) => {
  let flyingStars = [];
  let character = '*';

  if (emojiMode) {

    const emoji_i = Math.floor(Math.random() * emojis.length);
    character = emojis[emoji_i];
  }

  for (let i = 0; i < 50; i++) {
    let star = (
      <div
        className="star"
        key={`fs-${i}`}
        css={starStyle()}
      >
        {character}
      </div>
    );
    flyingStars.push(star);
  }
  return <div className="flying-stars">{flyingStars}</div>;
};


export default FlyingStars;
