import React from "react";
import DATA from "../../data";

const QuestionPage = ({ onSelectAnswer }) => {
  const question = DATA[level].question;
  const choices = DATA[level].choices;

  return (
    <div>
      <div className="question-answers">
        <div className="question">{ question }</div>
        <div className="answers">
          {choices.map((c) => (
            <div>
              <input type="button" onClick={() => onSelectAnswer(c.result, c.add)} value={c} />
              <label>{ " " + c.answer }</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
