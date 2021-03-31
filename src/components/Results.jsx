import React from 'react';
import { RESULT_RED, RESULT_BLUE, RESULT_YELLOW, RESULT_GREEN, RESULT_BLACK, RESET } from '../constants';

export default class Results extends React.Component {
  render() {
    let { result } = this.props;
    let resultText = null;
    // Various results
    if (result === RESULT_RED) {
      resultText = (
        <div>
          <h1>You're red!</h1>
          <p>Good job! This is a good color.</p>
        </div>
      );
    } else if (result === RESULT_BLUE) {
      resultText = (
        <div>
          <h1>You are the color BLUE.</h1>
          <p>Haha! Thought you were going to get red, didn't you? You're probably not the type to expect the unexpected. Sad!</p>
        </div>
      );
    } else if (result === RESULT_YELLOW) {
      resultText = (
        <div className="result-yellow">
          <h1>You are the color YELLOW.</h1>
          <p>This is a pretty good indication you're a Gryffindor. I'm a Hufflepuff and <span className="underline">I strongly dislike</span> Gryffindors. Navigate to your browser's corresponding ❌ button to get your big hiney OUT of here!!*</p>
          <div className="results-subtext-1">*This result brought to you by the "Huff'N'Puff HP Potterhead Potheads"** group on Facebook so look us up. We're accepting applications for new mods. keep it 💯!!</div>
        </div>
      );
    } else if (result === RESULT_GREEN) {
      resultText = (
        <div>
          <h1>You are the color GREEN.</h1>
          <p>
            Riding the waves of life, you are constantly searching for a purpose. Before, you were asleep. But now, you are awake. Your eyes were closed but now you see. That door that was previously
            closed is now open. You miss 100% of the shots you don't take. Get out there. Otherwise, you'll stay inside.
          </p>
        </div>
      );
    } else if (result === RESULT_BLACK) {
      resultText = (
        <div>
          <h1>You are the color BLACK.</h1>
          <p>Black. You're a contrarian: Edgy and disagreeable. You have encountered many life complications due to your personality defects.</p>
        </div>
      );
    }

    return (
      <>
        {resultText}
        <div className="button try-again" onClick={() => console.log('try again')}>Try again?</div>
        {result === RESULT_YELLOW && (
          <div className="results-subtext-2">(**not an actual facebook group)</div>
        )}
      </>
    );
  }
}
