import React from 'react';

const TitlePage = ({ resultsLeft, onStartGame, onToggleEmojiMode }) => {
  let subtext = null;
  if (resultsLeft === 0) {
    subtext = <>You've played enough of this game. Now go do something else.</>;
  } else if (resultsLeft === 1) {
    subtext = (
      <>
        A colorful journey... {resultsLeft}{' '}
        more result. <br/> Think you can you find it?
      </>
    );
  } else {
    subtext = (
      <>
        A colorful journey... {resultsLeft}{' '}
        different possibilities. <br/>Can you find them all?
      </>
    );
  }

  return (
    <div className="page title-page">
      <div className="title-header" onClick={onStartGame}>
        <span className="the">The</span>
        Color Quiz
      </div>
      <div className="title-subtext">
        {subtext}
      </div>
      <div className="corner-text">Click title to start!</div>
      <div className="emoji-mode button" onClick={onToggleEmojiMode}>
        emoji mode
      </div>
    </div>
  );
};

export default TitlePage;
