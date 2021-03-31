import React, { useState, useEffect } from "react";
import "../../index.css";
import {
  randGradientBg,
  screenBg,
  resultPageStyle,
  FlyingStars,
} from "../../style-functions.js";
import HomepageLink from "../HomepageLink";
import DATA from "../../data";
import QuestionPage from "../Pages/QuestionPage";
import ResultsPage from "../Pages/ResultsPage";
import TitlePage from "../Pages/TitlePage";

const initState = {
  name: "",
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

  const toggleEmojiMode = () => setEmojiMode(!emojiMode);

  const incrLevel = () => setLevel(level + 1);

  const incrScore = (i, pToAdd) => {
    setTally((oldTally) => {
      const newTally = [...oldTally];
      newTally[i] = oldTally[i] + pToAdd;
      return newTally;
    });
  };

  const markAchievement = () => {
    let resultsAchieved = [];
    if (localStorage.getItem("resultsAchieved")) {
      resultsAchieved = JSON.parse(localStorage.getItem("resultsAchieved"));
    }
    resultsAchieved.push(getResult());
    localStorage.setItem("resultsAchieved", JSON.stringify(resultsAchieved));
  };

  const getAchievementCount = () => {
    let resultsAchieved = [];
    if (localStorage.getItem("resultsAchieved")) {
      resultsAchieved = JSON.parse(localStorage.getItem("resultsAchieved"));
    }
    return resultsAchieved.length;
  };

  const selectAnswer = (selectedResult, pointsToAdd) => {
    incrScore(selectedResult, pointsToAdd);
    incrLevel();
  };

  const resetGame = () => {
    console.log("resetting");
    markAchievement();
    setName(initState.name);
    setTally(initState.tally);
    setLevel(initState.level);
  };

  const isTitlePage = level === 0;
  const isQuestionPage = level > 0 && level < DATA.length - 1;
  const isResultPage = level === DATA.length - 1;

  return (
    <div className="main">
      <HomepageLink />
      {isTitlePage ? (
        <TitlePage
          onStartGame={incrLevel}
          onToggleEmojiMode={toggleEmojiMode}
          resultsLeft={5 - getAchievementCount()}
        />
      ) : null}
      {isQuestionPage ? <QuestionPage onSelectAnswer={selectAnswer} level={level} /> : null}
      {isResultPage ? <ResultsPage onReset={resetGame} result={getResult()} /> : null}
    </div>
  );
};

export default App;
