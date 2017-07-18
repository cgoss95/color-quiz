import {
    START,
    QUESTION_TYPE_MULTIPLE,
    RESULT_RED,
    RESULT_BLUE,
    RESULT_YELLOW,
    RESULT_GREEN,
    RESULT_BLACK,
    RESULTS
} from "./constants";

export default [
    {
        // START
        name: "start",
        type: START
    },
    {
        // Question one
        name: "question-one",
        type: QUESTION_TYPE_MULTIPLE,
        question: "Which of these fruits do you prefer?",
        choices: [
            {
                // Choice one
                answer: "Blueberry",
                result: RESULT_RED,
                add: 1
            },
            {
                // Choice two
                answer: "Apple",
                result: RESULT_BLUE,
                add: 1
            },
            {
                // Choice three
                answer: "Banana",
                result: RESULT_YELLOW,
                add: 1
            },
            {
                // Choice four
                answer: "Grape",
                result: RESULT_GREEN,
                add: 1
            },
            {
                // Choice five
                answer: "I don't like fruit. It scares me.",
                result: RESULT_BLACK,
                add: 1
            }
        ]
    },
    {
        // Question two, this question doesn't influence the results at all.
        name: "question-two",
        type: QUESTION_TYPE_MULTIPLE,
        question: "What is your gender?",
        choices: [
            {
                // Choice one
                answer: "Male",
                result: 0,
                add: 0
            },
            {
                // Choice two
                answer: "Female",
                result: 0,
                add: 0
            },
            {
                // Choice three
                answer: "Chocolate bar",
                result: 0,
                add: 0
            }
        ]
    },
    {
        // Question three
        name: "question-three",
        type: QUESTION_TYPE_MULTIPLE,
        question: "How is your day?",
        choices: [
            {
                // Choice one
                answer: "Awesome",
                result: RESULT_RED,
                add: 1
            },
            {
                // Choice two
                answer: "Good",
                result: RESULT_BLUE,
                add: 1
            },
            {
                // Choice three
                answer: "Decent",
                result: RESULT_YELLOW,
                add: 1
            },
            {
                // Choice four
                answer: "Eh",
                result: RESULT_GREEN,
                add: 1
            },
            {
                // Choice five
                answer: "Bad",
                result: RESULT_BLACK,
                add: 1
            }
        ]
    },
    {
        // Question four
        name: "question-four",
        type: QUESTION_TYPE_MULTIPLE,
        question: "Pick a color that describes you: ",
        choices: [
            {
                // Choice one
                answer: "Red",
                result: RESULT_BLUE,
                add: 5
            },
            {
                // Choice two
                answer: "Blue",
                result: RESULT_RED,
                add: 1
            },
            {
                // Choice three
                answer: "Yellow",
                result: RESULT_YELLOW,
                add: 1
            },
            {
                // Choice four
                answer: "Magenta",
                result: RESULT_GREEN,
                add: 1
            },
            {
                // Choice five
                answer: "Purple",
                result: RESULT_BLACK,
                add: 1
            }
        ]
    },
    {
        // Results
        name: "results",
        type: RESULTS
    }
];
