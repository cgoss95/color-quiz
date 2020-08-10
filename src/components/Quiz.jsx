import React from 'react';
import Level from './Level';
import Layout from './Layout';
import { SET_LEVEL, SET_RESULTS, SET_NAME, RESET } from '../constants';
import '../index.css';

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 0,
      winningResult: 0,
      result: [0, 0, 0, 0, 0],
      destinationsCompleted: [],
    };
  }

  setGameState = (action, params = null) => {
    if (action === SET_NAME) {
      this.setState(() => ({
        name: params.name,
      }));
    } else if (action === SET_RESULTS) {
      // Changes level
      // Store results into temporary variables
      var resultTemp = this.state.result.slice();
      var winningResultTemp = this.state.winningResult;

      // Increment result score
      resultTemp[params.result_index] = resultTemp[params.result_index] + params.add;

      // Check to see what the winning result is now.
      for (var n = 0; n < resultTemp.length; n++) {
        if (resultTemp[n] > resultTemp[winningResultTemp]) {
          winningResultTemp = n;
        }
      }

      // Set the state
      this.setState(() => ({
        result: resultTemp,
        winningResult: winningResultTemp,
      }));
    } else if (action === SET_LEVEL) {
      this.setState(({ level }) => ({
        level: level + 1,
      }));
    } else if (action === RESET) {
      this.setState(({ destinationsCompleted }) => {
        let newDestinationsCompleted = [...destinationsCompleted];
        if (!destinationsCompleted.includes(params.resultAchieved)) {
          newDestinationsCompleted.push(params.resultAchieved);
        }
        return {
          level: 0,
          winningResult: 0,
          result: [0, 0, 0, 0, 0],
          destinationsCompleted: newDestinationsCompleted,
        };
      });
    }
  };

  // Render layout of question

  render() {
    const sharedProps = {
      setGameState: this.setGameState,
      gameState: this.state,
    };

    let gameContent = <Level {...sharedProps} />;
    let quiz = <Layout gameContent={gameContent} {...sharedProps} />;

    // Return quiz
    return quiz;
  }
}
