import React, { useState } from 'react';
import { Router, Route, Switch } from "react-router";
import HomepageLink from './HomepageLink';
import DATA from '../data';
import QuestionPage from './Pages/QuestionPage';
import ResultsPage from './Pages/ResultsPage';
import TitlePage from './Pages/TitlePage';

const initState = {
  name: '',
  tally: [0, 0, 0, 0, 0],
  level: 0,
  emojiMode: false,
};

const App = () => {
  const [name, setName] = useState(initState.name);
  const [tally, setTally] = useState(initState.tally);
  const [level, setLevel] = useState(initState.level);
  const [emojiMode, setEmojiMode] = useState(initState.emojiMode);
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
    return lgstI;
  };

  const toggleEmojiMode = () => setEmojiMode((s) => !s);

  const incrLevel = () => setLevel((s) => s + 1);

  const incrScore = (i, pToAdd) => {
    setTally((oldTally) => {
      const newTally = [...oldTally];
      newTally[i] = oldTally[i] + pToAdd;
      return newTally;
    });
  };

  const markAchievement = () => {
    let resultsAchieved = [];
    if (localStorage.getItem('resultsAchieved')) {
      resultsAchieved = JSON.parse(localStorage.getItem('resultsAchieved'));
    }
    const result = getResult();
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

  const selectAnswer = (selectedResult, pointsToAdd) => {
    incrScore(selectedResult, pointsToAdd);
    incrLevel();
  };

  const resetGame = () => {
    console.log('resetting');
    markAchievement();
    setName(initState.name);
    setTally(initState.tally);
    setLevel(initState.level);
  };

  const isTitlePage = level === 0;
  const isQuestionPage = level > 0 && level < DATA.length - 1;
  const isResultPage = level === DATA.length - 1;

  return (
    <div className="app">
      <HomepageLink />
      {isTitlePage && (
        <TitlePage
          onStartGame={incrLevel}
          onToggleEmojiMode={toggleEmojiMode}
          resultsLeft={5 - getAchievementCount()}
        />
      )}
      {isQuestionPage && (
        <QuestionPage onSelectAnswer={selectAnswer} level={level} />
      )}
      {isResultPage && (
        <ResultsPage onReset={resetGame} result={getResult()} />
      )}
    </div>
  );
};

export default App;
