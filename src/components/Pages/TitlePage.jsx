import React from "react";

const TitlePage = ({ resultsLeft, onStartGame, onToggleEmojiMode }) => {
  return (
    <>
      {/* <FlyingStars isRandomized={emojiMode} /> */}
      <div className="start-screen">
        <div className="start-header" onClick={() => incrLevel()}>
          <div className="start-the">The</div>
          <div className="start-color-quiz"> Color Quiz</div>
        </div>
        <div className="start-subtext">
          A colorful journey...{" "}
          <span class="underline">{5 - getAchievementCount()}</span>{" "}
          destinations
        </div>
        <div className="corner-text">Click title to start!</div>
        <div className="cool-mode button" onClick={toggleEmojiMode}>
          emoji mode
        </div>
      </div>
    </>
  );
};

export default TitlePage;
