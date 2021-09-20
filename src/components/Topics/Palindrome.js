import React, {Component} from "react";

export default class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: "",
            palindrome: ""
        }
    }

    handleChange = ({target}) => {
        const {value} = target;
        this.setState({userInput: value})
    }

    handleClick = () => {
        const input = this.state.userInput
        let arr = input.split("")
        let reverse = arr.reverse().join("")
        if(input === reverse) {
            this.setState({palindrome: reverse})
        } else {
            this.setState({palindrome: "Not a palindrome"})
        }
        this.setState({userInput: ""})
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" value={this.state.userInput} onChange={this.handleChange}></input>
                <button className="confirmationButton" onClick={this.handleClick}>Check</button>
                <span className="resultsBox">{this.state.palindrome}</span>
            </div>
        );
    }
}