import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Redirect,
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
  responses: [],
  emojiMode: false,
  result: -1,
};

const getQuestionNum = (p) => {
  const lastChar = p.substring(p.length - 1, p.length);
  const num = Number(lastChar);
  return num;
};

const App = () => {
  const [responses, setResponses] = useState(initState.responses);
  const [emojiMode, setEmojiMode] = useState(initState.emojiMode);

  let history = useHistory();

  const incrLevel = () => {
    const p = history.location.pathname;
    const nextNum = getQuestionNum(p) + 1;
    if (p === '/') {
      history.push('/question/1');
    } else if (p.includes('/question/') && nextNum < DATA.length - 1) {
      history.push('/question/' + nextNum);
    } else {
      history.push('/results');
    }
  };

  const toggleEmojiMode = () => setEmojiMode((s) => !s);

  const markAnswer = (choiceI) => setResponses((s) => [...s, choiceI]);

  const popAnswer = () =>
    setResponses((s) => {
      const newS = [...s];
      newS.pop();
      return newS;
    });

  const markAchievement = () => {
    const result = calculateScore();
    let resultsAchieved = [];
    if (localStorage.getItem('resultsAchieved')) {
      resultsAchieved = JSON.parse(localStorage.getItem('resultsAchieved'));
    }
    if (!resultsAchieved.includes(result) && result > -1) {
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

  const resetGame = () => {
    markAchievement();
    setResponses(initState.responses);
    history.push('/');
  };

  const selectAnswer = (choiceI) => {
    markAnswer(choiceI);
    incrLevel();
  };


  const calculateScore = () => {
    try {
      let finalTally = [0, 0, 0, 0, 0];
      let largest = -1;
      let lgstI = -1;

      responses.forEach((choice, i) => {
        const cObj = DATA[i + 1].choices[choice];
        finalTally[cObj.result] += cObj.add;
      });

      finalTally.forEach((r, i) => {
        if (r > largest) {
          largest = r;
          lgstI = i;
        }
      });
      return lgstI;
    } catch (_) {
      return 0;
    }
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
  }, [history, responses]);

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
          path="/question/:level"
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
            <ResultsPage
              {...props}
              onReset={resetGame}
              result={calculateScore()}
            />
          )}
        ></Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default withRouter(App);
