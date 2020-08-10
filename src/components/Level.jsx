import React from 'react';
import DATA from '../data';
import Results from './Results';
import { START, QUESTION_TYPE_MULTIPLE, QUESTION_TYPE_TEXTFIELD, RESULTS, SET_LEVEL, SET_RESULTS, SET_NAME } from '../constants';
import '../index.css';

export default class Level extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textfieldValue: '',
    };
  }

  onEventHandler = (e) => {
    const { level } = this.props.gameState;
    const { value } = e.target;
    if (DATA[level].type === START) {
      this.props.setGameState(SET_LEVEL);
    } else if (DATA[level].type === QUESTION_TYPE_MULTIPLE) {
      this.props.setGameState(SET_RESULTS, {
        add: DATA[level].choices[value].add,
        result_index: DATA[level].choices[value].result,
      });
      this.props.setGameState(SET_LEVEL);
    } else {
      console.log('error');
    }
  };

  // Render question to page
  renderQuestion = () => {
    const { level } = this.props.gameState;
    return DATA[level].question;
  };

  // Render answers to page
  renderAnswers = () => {
    const arr = [];
    const { level } = this.props.gameState;
    for (let choice = 0; choice < DATA[level].choices.length; choice++) {
      arr.push(
        <div>
          <input type="button" onClick={this.onEventHandler} value={choice} />
          <label>{' ' + DATA[level].choices[choice].answer}</label>
        </div>
      );
    }
    return <div>{arr}</div>;
  };

  // Render text to a page
  // renderText = () => {
  //   const { level } = this.props.gameState;
  //   return <div className="text">{DATA[level].text}</div>;
  // };

  // Render a text field to the page
  renderTextfield = (text) => {
    const { textfieldValue } = this.state;
    return (
      <div>
        {text}
        <br />
        <input
          value={textfieldValue}
          onChange={(e) => {
            this.setState({
              textfieldValue: e.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            this.props.setGameState(SET_NAME, {
              name: textfieldValue,
            });
            this.props.setGameState(SET_LEVEL);
          }}
        >
          Submit
        </button>
      </div>
    );
  };

  // Render the results of a page
  // renderResults = () => {
  //   return <Results gameState={this.props.gameState} />;
  // };

  // Render entire level
  render() {
    const { level } = this.props.gameState;
    // Build level
    switch (DATA[level].type) {
      case START:
        return (
          <div className="start" onClick={this.onEventHandler}>
            <div className="start-the">The</div> Color Quiz
          </div>
        );
      case RESULTS:
        return (
          <div className="results">
            <Results gameState={this.props.gameState} setGameState={this.props.setGameState} />
          </div>
        );
      case QUESTION_TYPE_MULTIPLE:
        // Render multiple-choice question
        return (
          <div className="question-answers">
            <div className="question">{this.renderQuestion()}</div>
            <div className="answers">{this.renderAnswers()}</div>
          </div>
        );
      case QUESTION_TYPE_TEXTFIELD:
        return <div>{this.renderTextfield()}</div>;
      default:
        break;
    }
  }
}
