import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';

const TitlePage = ({ resultsLeft, onStartGame, onToggleEmojiMode }) => {
  return (
    <div className="page title-page">
      {/* <FlyingStars isRandomized={emojiMode} /> */}
      <div className="title-header" onClick={onStartGame}>
        <span className="the">The</span>
        Color Quiz
      </div>
      <div className="title-subtext">
        A colorful journey... <span className="underline">{resultsLeft}</span>{' '}
        destinations
      </div>
      <div className="corner-text">Click title to start!</div>
      <div className="emoji-mode button" onClick={onToggleEmojiMode}>
        emoji mode
      </div>
    </div>
  );
};

export default TitlePage;
