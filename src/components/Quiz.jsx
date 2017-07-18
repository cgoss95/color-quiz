import React from "react";
import Level from "./Level";
import Layout from "./Layout";
import { SET_LEVEL, SET_RESULTS, SET_NAME } from "../constants";
import "../index.css";

export default class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 0,
            winningResult: 0,
            result: [0, 0, 0, 0, 0]
        };
    }

    setGameState = (action, object = null) => {
        if (action === SET_NAME) {
            this.setState((prevState, props) => ({
                name: object.name
            }));
        } else if (action === SET_RESULTS) {
            // Changes level
            // Store results into temporary variables
            var resultTemp = this.state.result.slice();
            var winningResultTemp = this.state.winningResult;

            // Increment result score
            resultTemp[object.result_index] =
                resultTemp[object.result_index] + object.add;

            // Check to see what the winning result is now.
            for (var n = 0; n < resultTemp.length; n++) {
                if (resultTemp[n] > resultTemp[winningResultTemp]) {
                    winningResultTemp = n;
                }
            }

            // Set the state
            this.setState((prevState, props) => ({
                result: resultTemp,
                winningResult: winningResultTemp
            }));
        } else if (action === SET_LEVEL) {
            this.setState((prevState, props) => ({
                level: prevState.level + 1
            }));
        } else {
        }
    };

    // Render layout of question

    render() {
        let gameContent = (
            <Level setGameState={this.setGameState} gameState={this.state} />
        );

        let quiz = <Layout gameContent={gameContent} gameState={this.state} />;

        // Return quiz
        return quiz;
    }
}
