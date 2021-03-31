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
import ResultsPage from "../Pages/ResultsPage";
import QuestionPage from '../Pages/QuestionPage'
import Results from "../Results";
import {
  START,
  QUESTION_TYPE_MULTIPLE,
  QUESTION_TYPE_TEXTFIELD,
  RESULTS,
  SET_LEVEL,
  SET_RESULTS,
  SET_NAME,
  RESET,
} from "../../constants";

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
    // i === quiz result index to add to
    // pToAdd === points to add

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

  const TitlePage = () => {
    return (
      <>
        {/* <FlyingStars isRandomized={emojiMode} /> */}
        <div className="start-screen">
          <div className="start-header" onClick={() => incrLevel()}>
            <div className="start-the">The</div>
            <div className="start-color-quiz"> Color Quiz</div>
          </div>
          <div className="start-subtext">
            A colorful journey...{" "}
            <span class="underline">{5 - getAchievementCount()}</span>{" "}
            destinations
          </div>
          <div className="corner-text">Click title to start!</div>
          <div className="cool-mode button" onClick={toggleEmojiMode}>
            emoji mode
          </div>
        </div>
      </>
    );
  };

  const isTitlePage = level === 0;
  const isQuestionPage = level > 0 && level < DATA.length - 1;
  const isResultPage = level === DATA.length - 1;

  return (
    <div className="main">
      {isTitlePage ? (
        <TitlePage
          resultsLeft={5 - getAchievementCount()}
          onStartGame={incrLevel}
          onToggleEmojiMode={toggleEmojiMode}
        />
      ) : null}
      {isQuestionPage ? <QuestionPage onSelectAnswer={selectAnswer} /> : null}
      {isResultPage ? <ResultPage /> : null}
    </div>
  );
};

export default App;
