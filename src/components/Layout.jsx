import React from "react";
import data from "../data";

function randomLinearGradientBackground() {
    var randomAngle = Math.random() * 360;
    var randomHex1 = (Math.random() * 255 ** 3).toString(16).slice(0, 6);
    var randomHex2 = (Math.random() * 255 ** 3).toString(16).slice(0, 6);
    var linearGradient =
        "linear-gradient(" +
        randomAngle +
        "deg, #" +
        randomHex1 +
        ", #" +
        randomHex2 +
        ")";
    return { backgroundImage: linearGradient };
}

function resultStyle(resultNumber) {
    var resultStyle;
    switch (resultNumber) {
        case 0:
            resultStyle = { backgroundColor: "#A11111", color: "white" };
            break;
        case 1:
            resultStyle = { backgroundColor: "#1141A1", color: "white" };
            break;
        case 2:
            resultStyle = { backgroundColor: "#F3E13D", color: "black" };
            break;
        case 3:
            resultStyle = { backgroundColor: "#92F33D", color: "white" };
            break;
        case 4:
            resultStyle = { backgroundColor: "black", color: "white" };
            break;
        default:
            break;
    }
    return resultStyle;
}

function CenterStyle(props) {
    return (
        <div>
            <div className="middle">
                <div className="whitespace" />
                <div className="center">
                    <div className="whitespace" />
                    <div className="content">
                        {props.content}
                    </div>
                    <div className="whitespace" />
                </div>
                <div className="whitespace" />
            </div>
        </div>
    );
}

function starsEffect() {
    var arr = [];
    for (var n = 0; n < 100; n++) {
        var element = (
            <div
                className="flying-stars"
                key={n}
                style={{
                    position: "absolute",
                    left: (Math.random() * 1000 - 1050) * 2,
                    top: (Math.random() * 1000 - 1050) * 2
                }}
            >
                *
            </div>
        );
        arr.push(element);
    }
    return <div>{arr}</div>;
}

export default class Layout extends React.Component {
    currentLayout = gameContent => {
        var layout;
        // Layout for start page
        if (this.props.gameState.level === 0) {
            layout = (
                <div className="main">
                    {starsEffect()}
                    <div className="background-start">
                        <div className="corner-text">Click title to start!</div>
                        <div className="start-subtext">
                            A colorful journey.
                        </div>
                        <CenterStyle content={gameContent} />
                    </div>
                </div>
            );
        } else if (this.props.gameState.level === data.length - 1) {
            // Layout for results page
            layout = (
                <div className="main">
                    <div
                        style={resultStyle(this.props.gameState.winningResult)}
                    >
                        <CenterStyle content={gameContent} />
                    </div>
                </div>
            );
        } else {
            layout = (
                <div className="main" align="center">
                    {starsEffect()}
                    <div style={randomLinearGradientBackground()}>
                        <CenterStyle content={gameContent} />
                    </div>
                </div>
            );
        }

        return layout;
    };

    render() {
        return this.currentLayout(this.props.gameContent);
    }
}
