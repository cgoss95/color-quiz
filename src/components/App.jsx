import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
  withRouter,
} from 'react-router-dom';
import HomepageLink from './HomepageLink';
import DATA from '../data';
import QuestionPage from './Pages/QuestionPage';
import ResultsPage from './Pages/ResultsPage';
import TitlePage from './Pages/TitlePage';
import FlyingStars from './FlyingStars';

const initState = {
  name: '',
  tally: [0, 0, 0, 0, 0],
  answers: [],
  level: 0,
  emojiMode: false,
  result: -1,
};

const getQNum = (p) => {
  const lastChar = p.substring(p.length - 1, p.length);
  const num = Number(lastChar);
  return num;
};

const App = () => {
  const [answers, setAnswers] = useState(initState.answers);
  const [result, setResult] = useState(initState.result);
  const [emojiMode, setEmojiMode] = useState(initState.emojiMode);

  let history = useHistory();

  const incrLevel = () => {
    const p = history.location.pathname;
    const nextNum = getQNum(p) + 1;
    if (p === '/') {
      history.push('/q/1');
    } else if (p.includes('/q/') && nextNum < DATA.length - 1) {
      history.push('/q/' + nextNum);
    } else {
      calculateScore();
      history.push('/results');
    }
  };

  const toggleEmojiMode = () => setEmojiMode((s) => !s);

  const markAnswer = (choiceI) =>
    setAnswers((s) => {
      return [...s, choiceI];
    });

  const popAnswer = (choiceI) =>
    setAnswers((s) => {
      const newS = [...s];
      newS.pop();
      return newS;
    });

  const markAchievement = () => {
    let resultsAchieved = [];
    if (localStorage.getItem('resultsAchieved')) {
      resultsAchieved = JSON.parse(localStorage.getItem('resultsAchieved'));
    }
    if (!resultsAchieved.includes(result)) {
      resultsAchieved.push(result);
    }
    localStorage.setItem('resultsAchieved', JSON.stringify(resultsAchieved));
  };

  const getAchievementCount = () => {
    let resultsAchieved = [];
    if (localStorage.getItem('resultsAchieved')) {
      resultsAchieved = JSON.parse(localStorage.getItem('resultsAchieved'));
    }
    return resultsAchieved.length;
  };

  const selectAnswer = (choiceI) => {
    console.log(choiceI);
    markAnswer(choiceI);
    incrLevel();
  };

  const resetGame = () => {
    markAchievement();
    setAnswers(initState.answers);
    history.push('/');
  };

  const getResult = (tally) => {
    let largest = -1;
    let lgstI = -1;
    tally.forEach((r, i) => {
      if (r > largest) {
        largest = r;
        lgstI = i;
      }
    });
    return lgstI;
  };

  const calculateScore = () => {
    let finalTally = [0, 0, 0, 0, 0];
    answers.forEach((choice, i) => {
      const cObj = DATA[i + 1].choices[choice];
      finalTally[cObj.result] += cObj.add;
    });
    setResult(getResult(finalTally));
  };

  useEffect(() => {
    return history.listen((location) => {
      if (history.action === 'POP') {
        popAnswer();
        if (location.pathname === '/') {
          resetGame();
        }
      }
    });
  }, [answers, history]);

  return (
    <div className="app">
      <HomepageLink />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <>
              <FlyingStars emojiMode={emojiMode} />
              <TitlePage
                {...props}
                onStartGame={incrLevel}
                onToggleEmojiMode={toggleEmojiMode}
                resultsLeft={5 - getAchievementCount()}
              />
            </>
          )}
        ></Route>
        <Route
          path="/q/:level"
          render={(props) => (
            <>
              <FlyingStars emojiMode={emojiMode} />
              <QuestionPage {...props} onSelectAnswer={selectAnswer} />
            </>
          )}
        ></Route>
        <Route
          path="/results"
          render={(props) => (
            <ResultsPage {...props} onReset={resetGame} result={result} />
          )}
        ></Route>
      </Switch>
    </div>
  );
};

export default withRouter(App);
