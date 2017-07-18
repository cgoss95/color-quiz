/*
class ShowResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result_1: "You are merely a puny insect",
            result_2: "Do you smell fear, do you?",
            result_3: "Haha longboy",
            result_error: "Error"
        };
    }

    getResults = event => {
        var results = "";
        switch (this.props.result) {
            case "1":
                return <div><p>{this.state.result_1}</p></div>;
            case "2":
                return <div><p>{this.state.result_2}</p></div>;
            case "3":
                return <div><p>{this.state.result_3}</p></div>;
            default:
                return <div><p>{this.state.result_error}</p></div>;
        }
    };

    render(props) {
        return <div>{this.getResults(this.props.result)}</div>;
    }
}

class LevelOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            question_number: "1",
            option_1: "Blue",
            option_2: "Purple",
            option_3: "Red"
        };
    }

    goToResults = event => {
        ReactDOM.render(
            <ShowResults result={event.target.value} />,
            document.getElementById("root")
        );
    };

    levelOne = () => {
        return (
            <div>
                <p>What is your favorite color?</p>
                <form>
                    <label>
                        {this.state.option_1}
                        <input
                            name={this.state.question_number}
                            type="radio"
                            value="1"
                            onChange={this.goToResults}
                        />
                    </label>
                    <br />
                    <label>
                        {this.state.option_2}
                        <input
                            name={this.state.question_number}
                            type="radio"
                            value="2"
                            onChange={this.goToResults}
                        />
                    </label>
                    <br />
                    <label>
                        {this.state.option_3}
                        <input
                            name={this.state.question_number}
                            type="radio"
                            value="3"
                            onChange={this.goToResults}
                        />
                    </label>
                    <br />
                </form>
            </div>
        );
    };

    render() {
        return this.levelOne();
    }
}

class Start extends React.Component {
    start = () => {
        return (
            <p
                onClick={() => {
                    ReactDOM.render(
                        <LevelOne />,
                        document.getElementById("root")
                    );
                }}
            >
                Let go
            </p>
        );
    };

    render() {
        return this.start();
    }
}

class Quiz extends React.Component {
    render() {
        return <Start />;
    }
}
// quiz should have a piece of state called started for whether the quiz has started, a boolean
// quiz should render the start page if state.started === false, and level one when its true
// start page should have a click handler that changes state.started to true
ReactDOM.render(<Quiz />, document.getElementById("root"));

*/
