import React, {Component} from "react";
import "../../index.css"

export default class FilterObject extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: [
                {name: "Boe", job: "plumber", age: 42},
                {location: "Hawaii", amount: 1000000, acres: 1},
                {occupation: "teacher", name: "Johnson", tenure: false}
            ],
            userInput: "",
            filteredArray: []
        }
    }

    displayUnFilteredArray = () => 
        this.state.unFilteredArray.map(obj => {for (const [key, value] of Object.entries(obj)) {
            console.log(key + value);
            }
        })
    

    handleChange = (e) => this.setState({userInput: e.target.value})

    handleClick = () => {
        this.state.unFilteredArray.map(obj => {
            if(obj[this.state.userInput]) {
                console.log(obj, "object from filter")
                this.setState(prev => ({filteredArray: [...prev.filteredArray, obj]}))
            }
        })
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={this.handleChange}></input>
                <button className="confirmationButton" onClick={this.handleClick}>Submit</button>
                <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        );
    }
}