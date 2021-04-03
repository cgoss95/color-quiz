/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import {
  RESULT_RED,
  RESULT_BLUE,
  RESULT_YELLOW,
  RESULT_GREEN,
  RESULT_BLACK,
  RESET,
} from '../../constants';
import {
  Red,
  Blue,
  Yellow,
  Green,
  Black,
  resultPageStyle,
} from '../ResultCards';

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

const ResultsPage = ({ onReset, result }) => {
  return (
    <div className="page results-page" css={resultPageStyle[result]}>
      <div className="content">
        <div className="results-page-inner">
          <Result result={result} />
          <div className="button try-again" onClick={() => onReset()}>
            Try again?
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
