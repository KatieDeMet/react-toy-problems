import React, {Component} from "react";

export default class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }

    handleChange = (e) => {
        this.setState({userInput: e.target.value})
    }

    handleClick = () => {
       const inputArr = this.state.userInput.split(",");
       inputArr.map(num => {
            if(num%2 === 0) {
                return this.setState(prevState => ({evenArray: [...prevState.evenArray, num]}))
            } else {
                return this.setState(prevState => ({oddArray: [...prevState.oddArray, num]}))
            }
        })
        this.setState({userInput: ""})
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={this.handleChange}></input>
                <button className="confirmationButton" onClick={this.handleClick}>Submit</button>
                <span className="resultsBox">Evens: {this.state.evenArray.join(" ")}</span>
                <span className="resultsBox">Odds: {this.state.oddArray.join(" ")}</span>
            </div>
        );
    }
}