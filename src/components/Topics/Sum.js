import React, {Component} from "react";

export default class Sum extends Component {
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleChange = async (e) => {
        const {value, id} = e.target
        if(id === "1") {
            this.setState({number1: +value})
        } else {
            this.setState({number2: +value})
        }
    }

    handleClick = () => this.setState({sum: this.state.number1+this.state.number2})

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" id="1" onChange={this.handleChange}></input>
                <input className="inputLine" id="2" onChange={this.handleChange}></input>
                <button className="confirmationButton" onClick={this.handleClick}>Calculate</button>
                <span className="resultsBox">{this.state.sum}</span>
            </div>
        );
    }
}