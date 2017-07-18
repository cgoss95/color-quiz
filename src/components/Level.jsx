import React from "react";
import data from "../data";
import Results from "./Results";
import {
    START,
    QUESTION_TYPE_MULTIPLE,
    QUESTION_TYPE_TEXTFIELD,
    RESULTS,
    SET_LEVEL,
    SET_RESULTS,
    SET_NAME
} from "../constants";
import "../index.css";

export default class Level extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textfieldValue: ""
        };
    }

    onEventHandler = event => {
        if (data[this.props.gameState.level].type === START) {
            this.props.setGameState(SET_LEVEL);
        } else if (
            data[this.props.gameState.level].type === QUESTION_TYPE_MULTIPLE
        ) {
            this.props.setGameState(SET_RESULTS, {
                add:
                    data[this.props.gameState.level].choices[event.target.value]
                        .add,
                result_index:
                    data[this.props.gameState.level].choices[event.target.value]
                        .result
            });
            this.props.setGameState(SET_LEVEL);
        } else {
            console.log("error");
        }
    };

    // Render start to page
    renderStart = () => {
        return (
            <div className="start" onClick={this.onEventHandler}>
                <div className="start-the">The</div> Color Quiz
            </div>
        );
    };

    // Render question to page
    renderQuestion = () => {
        return data[this.props.gameState.level].question;
    };

    // Render answers to page
    renderAnswers = () => {
        var arr = [];
        for (
            var choice = 0;
            choice < data[this.props.gameState.level].choices.length;
            choice++
        ) {
            arr.push(
                <div>
                    <input
                        type="button"
                        onClick={this.onEventHandler}
                        value={choice}
                    />
                    <label>
                        {" " +
                            data[this.props.gameState.level].choices[choice]
                                .answer}
                    </label>
                </div>
            );
        }
        var element = <div>{arr}</div>;
        return element;
    };

    // Render text to a page
    renderText = () => {
        return (
            <div className="text">{data[this.props.gameState.level].text}</div>
        );
    };

    // Render a text field to the page
    renderTextfield = text => {
        return (
            <div>
                {text}
                <br />
                <input
                    value={this.state.textfieldValue}
                    onChange={e => {
                        this.setState({
                            textfieldValue: e.target.value
                        });
                    }}
                />
                <button
                    onClick={() => {
                        this.props.setGameState(SET_NAME, {
                            name: this.state.textfieldValue
                        });
                        this.props.setGameState(SET_LEVEL);
                    }}
                >
                    Submit
                </button>
            </div>
        );
    };

    // Render the results of a page
    renderResults = () => {
        return <Results gameState={this.props.gameState} />;
    };

    // Render entire level
    render() {
        // Build level
        switch (data[this.props.gameState.level].type) {
            case START:
                return <div>{this.renderStart()}</div>;
            case RESULTS:
                return <div className="results">{this.renderResults()}</div>;
            case QUESTION_TYPE_MULTIPLE:
                // Render multiple-choice question
                return (
                    <div className="question-answers">
                        <div className="question">{this.renderQuestion()}</div>
                        <div className="answers">{this.renderAnswers()}</div>
                    </div>
                );
            case QUESTION_TYPE_TEXTFIELD:
                return <div>{this.renderTextfield()}</div>;
            default:
                break;
        }
    }
}
