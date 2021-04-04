/** @jsx jsx */
import React from 'react';
import {
  BrowserRouter as Router,
  useParams,
} from 'react-router-dom';
import { randGradientBg } from '../../style-functions';
import DATA from '../../data';
import { jsx, css } from '@emotion/react';

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
              <div>
                <input
                  className="select-btn"
                  type="button"
                  onClick={() => onSelectAnswer(choiceI)}
                  value={choice.answer}
                />
                <label>{' ' + choice.answer}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
