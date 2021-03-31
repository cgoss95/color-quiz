import React from "react";

const TitlePage = ({ resultsLeft, onStartGame, onToggleEmojiMode }) => {
  return (
    <div className="title-page page">
      {/* <FlyingStars isRandomized={emojiMode} /> */}
      <div className="start-header" onClick={onStartGame}>
        <div className="start-the">The</div>
        <div className="start-color-quiz"> Color Quiz</div>
      </div>
      <div className="start-subtext">
        A colorful journey...{" "}
        <span class="underline">{resultsLeft}</span> destinations
      </div>
      <div className="corner-text">Click title to start!</div>
      <div className="cool-mode button" onClick={onToggleEmojiMode}>
        emoji mode
      </div>
    </div>
  );
};

export default TitlePage;
