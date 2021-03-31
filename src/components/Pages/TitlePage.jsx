import React from 'react';

const TitlePage = ({ resultsLeft, onStartGame, onToggleEmojiMode }) => {
  return (
    <div className="title-page page">
      {/* <FlyingStars isRandomized={emojiMode} /> */}
      <div className="title-header" onClick={onStartGame}>
        <span className="the">The</span>
        Color Quiz
      </div>
      <div className="title-subtext">
        A colorful journey... <span class="underline">{resultsLeft}</span>{' '}
        destinations
      </div>
      <div className="corner-text">Click title to start!</div>
      <div className="cool-mode button" onClick={onToggleEmojiMode}>
        emoji mode
      </div>
    </div>
  );
};

export default TitlePage;
