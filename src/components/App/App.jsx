import React, { useState } from 'react';
import Level from './Level';
import Layout from './Layout';
import { SET_LEVEL, SET_RESULTS, SET_NAME, RESET } from '../constants';
import '../index.css';

const initState = {
  name: '',
  tally: [0, 0, 0, 0, 0],
  level: 0
};

const App = () => {
  const [name, setName] = useState(initState.name);
  const [tally, setTally] = useState(initState.tally);
  const [level, setLevel] = useState(initState.level);
  const resultsAchieved = useState();

  const getResult = () => {
    let largest = -1;
    let lgstI = -1;
    tally.forEach((r, i) => {
      if (r > largest) {
        largest = r;
        lgstI = i;
      }
    });
    return largest;
  }

  const incrLevel = () => setLevel(level + 1);
  const incrScore = (i, pToAdd) => {
    // i === quiz result index to add to
    // pToAdd === points to add

    setResults((oldResults) => {
      const newResults = [...oldResults];
      newResults[i] = oldResults[i] + pToAdd;
      return newResults;
    });
  }

  const markAchievement = () => {
    let resultsAchieved = [];
    if (localStorage.getItem('resultsAchieved')) {
      resultsAchieved = JSON.parse(localStorage.getItem('resultsAchieved'));
    }
    resultsAchieved.push(getResults());
    localStorage.setItem('resultsAchieved', JSON.stringify(resultsAchieved));
  }

  const resetGame = () => {
    markAchievement();
    setName(initState.name);
    setTally(initState.tally);
    setLevel(initState.level);
  }


}
export default class App extends React.Component {
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
      // this.setState(() => ({
      //   name: params.name,
      // }));
    } else if (action === SET_RESULTS) {

    } else if (action === SET_LEVEL) {
      // this.setState(({ level }) => ({
      //   level: level + 1,
      // }));
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


export default App;
