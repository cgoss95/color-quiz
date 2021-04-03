import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import DATA from '../../data';

const QuestionPage = ({ onSelectAnswer }) => {
  const { level } = useParams();
  const question = DATA[level].question;
  const choices = DATA[level].choices;

  return (
    <div className="page question-page">
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
