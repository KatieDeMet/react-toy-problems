import React, {Component} from "react";

export default class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: ["cat", "dog", "birds", "snake"],
            userInput: "",
            filteredArray: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange = ({target}) => {
        const {value} = target
       this.setState({userInput: value})
    }

    handleClick = () => {
        const array = this.state.unFilteredArray
        array.map(word => {
            if(word.includes(this.state.userInput)) {
                this.setState(prev => ({filteredArray: [...prev.filteredArray, word]}))
                }
             })
        }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{this.state.unFilteredArray.join(" ")}</span>
                <input className="inputLine" onChange={this.handleChange}></input>
                <button className="confirmationButton" onClick={this.handleClick}>Check Matches</button>
                <span className="resultsBox filterStringRB">{this.state.filteredArray.join(" ")}</span>
            </div>
        );
    }
}