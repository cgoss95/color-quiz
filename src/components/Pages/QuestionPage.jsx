/** @jsx jsx */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DATA from '../../data';
import { jsx, css } from '@emotion/react';

const getRandomAngle = () => Math.random() * 360;
const getRandomHex = () => (Math.random() * 255 ** 3).toString(16).slice(0, 6);
const randGradientBg = () => css`
  background-image: linear-gradient(${getRandomAngle()}deg, #${getRandomHex()}, #${getRandomHex()});
`;

const AnswerChoice = ({ choice, onSelectAnswer }) => {
  const [showInput, setShowInput] = useState(false);
  const { answer, color, input } = choice;

  const onKeyPressHandler = ({ key }) => {
    if (key === 'Enter') {
      setShowInput(false);
      onSelectAnswer();
    }
  };

  const onClickHandler = () => {
    if (input) {
      setShowInput(true);
    } else {
      onSelectAnswer();
    }
  };

  return (
    <div className="answer-choice" onClick={onClickHandler}>
      <input
        className="select-btn"
        type="button"
        value={answer}
      />
      <label style={{ color }}>{' ' + answer}</label>
      {showInput && (
        <>
        <input
          className="feedback"
          type="text"
          onKeyPress={onKeyPressHandler}
          placeholder="Your name"
        ></input>
        <sup>Enter your name so I can add it here</sup>
        </>
      )}
    </div>
  );
};

const QuestionPage = ({ onSelectAnswer }) => {
  const { level } = useParams();
  const question = DATA[level].question;
  const choices = DATA[level].choices;

  return (
    <div className="page question-page" css={randGradientBg()}>
      <div className="content">
        <div className="question-container">
          <div className="question">{question}</div>
          <div className="answers">
            {choices.map((choice, choiceI) => (
              <AnswerChoice
                key={choice.answer.substring(0, 6)}
                choice={choice}
                onSelectAnswer={onSelectAnswer.bind(null, choiceI)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
