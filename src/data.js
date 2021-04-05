import {
  START,
  QUESTION_TYPE_MULTIPLE,
  RESULT_RED,
  RESULT_BLUE,
  RESULT_YELLOW,
  RESULT_GREEN,
  RESULT_BLACK,
  RESULTS,
} from './constants';

const DATA = [
  {
    name: 'start',
    type: START,
  },
  {
    type: QUESTION_TYPE_MULTIPLE,
    question: 'Which of these fruits do you prefer?',
    choices: [
      {
        answer: 'Apples, raspberries, or strawberries',
        result: RESULT_BLUE,
        add: 1,
      },
      {
        answer: 'Blueberries',
        result: RESULT_RED,
        add: 1,
      },
      {
        answer: 'Bananas',
        result: RESULT_YELLOW,
        add: 1,
      },
      {
        answer: 'Grapes',
        result: RESULT_GREEN,
        add: 1,
      },
      {
        answer: 'Blackberries',
        result: RESULT_BLACK,
        add: 1,
      },
    ],
  },
  {
    type: QUESTION_TYPE_MULTIPLE,
    question: 'What is your name?',
    choices: [
      {
        answer: 'Denise',
        result: 0,
        add: 0,
      },
      {
        answer: 'Josh',
        result: 0,
        add: 0,
      },
      {
        answer: 'Not listed',
        result: 0,
        add: 0,
      },
    ],
  },
  {
    type: QUESTION_TYPE_MULTIPLE,
    question: 'If you were gifted a new car, what color would you paint it?',
    choices: [
      {
        answer: 'Candy apple red',
        result: RESULT_BLUE,
        add: 1,
      },
      {
        answer: 'Light blue sky',
        result: RESULT_RED,
        add: 1,
      },
      {
        answer: 'Rainbow confetti',
        result: RESULT_YELLOW,
        add: 1,
      },
      {
        answer: 'Iridescent',
        result: RESULT_GREEN,
        add: 1,
      },
      {
        answer: 'Shadow gothic dark sadness matte black',
        result: RESULT_BLACK,
        add: 1,
      },
    ],
  },

  {
    type: QUESTION_TYPE_MULTIPLE,
    question: 'How is your day?',
    choices: [
      {
        answer: 'Awesome',
        result: RESULT_RED,
        add: 1,
      },
      {
        answer: 'Good',
        result: RESULT_BLUE,
        add: 1,
      },
      {
        answer: 'Decent',
        result: RESULT_YELLOW,
        add: 1,
      },
      {
        answer: 'Amiss',
        result: RESULT_GREEN,
        add: 1,
      },
      {
        answer: 'Bad',
        result: RESULT_BLACK,
        add: 1,
      },
    ],
  },
  {
    type: QUESTION_TYPE_MULTIPLE,
    question: 'Pick a color that describes you: ',
    choices: [
      {
        answer: 'Red',
        result: RESULT_BLUE,
        color: '#dc1717',
        add: 500,
      },
      {
        answer: 'Blue',
        result: RESULT_RED,
        color: '#0041ff',
        add: 1,
      },
      {
        answer: 'Yellow',
        result: RESULT_YELLOW,
        color: '#F3E13D',
        add: 1,
      },
      {
        answer: 'Magenta',
        result: RESULT_GREEN,
        color: '#e432ff',
        add: 1,
      },
      {
        answer: 'Purple',
        result: RESULT_BLACK,
        color: '#6c02ed',
        add: 1,
      },
      {
        answer: 'Isn\'t that why I\'m taking this quiz..?',
        result: RESULT_BLACK,
        add: 500
      }
    ],
  },
  {
    name: 'results',
    type: RESULTS,
  },
];

export default DATA;
