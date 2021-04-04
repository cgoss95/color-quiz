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
    // START
    name: 'start',
    type: START,
  },
  {
    // Question one
    type: QUESTION_TYPE_MULTIPLE,
    question: 'Which of these fruits do you prefer?',
    choices: [
      {
        // Choice two
        answer: 'Apples, raspberries, or strawberries',
        result: RESULT_BLUE,
        add: 10,
      },
      {
        // Choice one
        answer: 'Blueberries',
        result: RESULT_RED,
        add: 1,
      },
      {
        // Choice three
        answer: 'Bananas',
        result: RESULT_YELLOW,
        add: 1,
      },
      {
        // Choice four
        answer: 'Grapes',
        result: RESULT_GREEN,
        add: 1,
      },
      {
        // Choice five
        answer: 'Blackberries',
        result: RESULT_BLACK,
        add: 1,
      },
    ],
  },
  {
    // Question two, this question doesn't influence the results at all.
    type: QUESTION_TYPE_MULTIPLE,
    question: 'What is your name?',
    choices: [
      {
        // Choice two
        answer: 'Denise',
        result: 0,
        add: 0,
      },
      {
        // Choice one
        answer: 'Josh',
        result: 0,
        add: 0,
      },
      {
        // Choice three
        answer: 'Not listed',
        result: 0,
        add: 0,
        input: true
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
        add: 10,
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
        // Choice one
        answer: 'Awesome',
        result: RESULT_RED,
        add: 1,
      },
      {
        // Choice two
        answer: 'Good',
        result: RESULT_BLUE,
        add: 1,
      },
      {
        // Choice three
        answer: 'Decent',
        result: RESULT_YELLOW,
        add: 1,
      },
      {
        // Choice four
        answer: 'Amiss',
        result: RESULT_GREEN,
        add: 1,
      },
      {
        // Choice five
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
        // Choice one
        answer: 'Red',
        result: RESULT_BLUE,
        color: '#dc1717',
        add: 10,
      },
      {
        // Choice two
        answer: 'Blue',
        result: RESULT_RED,
        color: '#0041ff',
        add: 1,
      },
      {
        // Choice three
        answer: 'Yellow',
        result: RESULT_YELLOW,
        color: '#F3E13D',
        add: 1,
      },
      {
        // Choice four
        answer: 'Magenta',
        result: RESULT_GREEN,
        color: '#e432ff',
        add: 1,
      },
      {
        // Choice five
        answer: 'Purple',
        result: RESULT_BLACK,
        color: '#6c02ed',
        add: 1,
      },
    ],
  },
  {
    // Results
    name: 'results',
    type: RESULTS,
  },
];

export default DATA;
