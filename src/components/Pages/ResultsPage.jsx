import React from 'react';
import { RESULT_RED, RESULT_BLUE, RESULT_YELLOW, RESULT_GREEN, RESULT_BLACK, RESET } from '../constants';
import { Red, Blue, Yellow, Green, Black } from './result-pages';
import { resultPageStyle } from '../style-functions';

const Result = ({ result }) => {
  switch (result) {
    case RESULT_RED:
      return <Red />;

    case RESULT_BLUE:
      return <Blue />;

    case RESULT_YELLOW:
      return <Yellow />;

    case RESULT_GREEN:
      return <Green />;

    case RESULT_BLACK:
      return <Black />;

    default:
      return null;
  }
};

const ResultsPage = ({ result, reset }) => {
  return (
    <div className="results" style={resultPageStyle[result]}>
      <div class="results-page">
        <Result result={result} />
        <div className="button try-again" onClick={() => reset()}>
          Try again?
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
