import React from 'react';
import DATA from '../data';
import { START, QUESTION_TYPE_MULTIPLE, QUESTION_TYPE_TEXTFIELD, RESULTS, SET_LEVEL, SET_RESULTS, SET_NAME, RESET } from '../constants';

const randomLinearGradientBackground = () => {
  var randomAngle = Math.random() * 360;
  var randomHex1 = (Math.random() * 255 ** 3).toString(16).slice(0, 6);
  var randomHex2 = (Math.random() * 255 ** 3).toString(16).slice(0, 6);
  var linearGradient = 'linear-gradient(' + randomAngle + 'deg, #' + randomHex1 + ', #' + randomHex2 + ')';
  return { backgroundImage: linearGradient };
};

const getResultCardsStyle = (resultNumber) => {
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

const FlyingStars = ({ isRandomized = false }) => {
  let flyingStars = [];
  let character = '*';
  if (isRandomized) {
    let coolEmojis = ['😀', '🥺', '🤬', '😄', '🤣', '🤠', '👺', '👅', '🎒'];
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

const screenBackground = (level, winningResult) => {
  if (level === 0) {
    return {
      backgroundImage: 'linear-gradient(45deg, #878CA6, #6298FE)',
    };
  } else if (level === DATA.length - 1) {
    return getResultCardsStyle(winningResult);
  }
  return randomLinearGradientBackground();
};

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmojiMode: false,
    };
  }
  onEventHandler = (e) => {
    const { level } = this.props.gameState;
    const { setGameState } = this.props;
    const { value } = e.target;
    if (DATA[level].type === START) {
      setGameState(SET_LEVEL);
    } else if (DATA[level].type === QUESTION_TYPE_MULTIPLE) {
      setGameState(SET_RESULTS, {
        add: DATA[level].choices[value].add,
        result_index: DATA[level].choices[value].result,
      });
      setGameState(SET_LEVEL);
    } else {
      console.log('error');
    }
  };

  render() {
    const { isEmojiMode } = this.state;
    const { level, winningResult, destinationsCompleted } = this.props.gameState;
    const { gameContent } = this.props;
    return (
      <div className="main" style={screenBackground(level, winningResult)} align="center">
        {level === 0 && (
          <>
            <FlyingStars isRandomized={isEmojiMode} />
            <div className="start-screen">
              <div className="start" onClick={this.onEventHandler}>
                <div className="start-the">The</div> Color Quiz
              </div>
              <div className="start-subtext">A colorful journey... {5 - destinationsCompleted.length} destinations</div>
              <div className="corner-text">Click title to start!</div>
              <div className="cool-mode button" onClick={() => this.setState({ isEmojiMode: true })}>emoji mode</div>
            </div>
          </>
        )}
        {level === DATA.length - 1 && <div style={getResultCardsStyle(winningResult)}>{gameContent}</div>}
        {level > 0 && level < DATA.length - 1 && <div>{gameContent}</div>}
      </div>
    );
  }
}
