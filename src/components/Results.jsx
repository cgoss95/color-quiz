import React from "react";
import {
    RESULT_RED,
    RESULT_BLUE,
    RESULT_YELLOW,
    RESULT_GREEN,
    RESULT_BLACK
} from "../constants";
export default class Results extends React.Component {
    render() {
        // Various results
        if (this.props.gameState.winningResult === RESULT_RED) {
            return (
                <div>
                    <h1>You're red!</h1>
                    <p>Good job! This is a good color.</p>
                </div>
            );
        } else if (this.props.gameState.winningResult === RESULT_BLUE) {
            return (
                <div>
                    <h1>You are the color BLUE.</h1>
                    <p>
                        Haha! Thought you were going to get red, didn't you?
                        You're probably not the type to expect the
                        unexpected. Sad!
                    </p>
                </div>
            );
        } else if (this.props.gameState.winningResult === RESULT_YELLOW) {
            return (
                <div>
                    <h1>You are the color YELLOW.</h1>
                    <p>You're a normal person</p>
                </div>
            );
        } else if (this.props.gameState.winningResult === RESULT_GREEN) {
            return (
                <div>
                    <h1>You are the color GREEN.</h1>
                    <p>Closely resembles the color of dirt.</p>
                </div>
            );
        } else if (this.props.gameState.winningResult === RESULT_BLACK) {
            return (
                <div className="result-4">
                    <h1>You are the color BLACK.</h1>
                    <p>
                        Black. You're a contrarian: Edgy and disagreeable.
                        You have encountered many life complications due to
                        your personality defects.
                    </p>
                </div>
            );
        } else {
            return <div>Error</div>;
        }
    }
}
