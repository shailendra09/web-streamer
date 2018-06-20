import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

// Add a shared functionality for all Person Objects to inherit called full name
// which returns the full name stored in Person Object
Person.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}

// Class called Person in Old JS using functions to store a persons
// first and last name
function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
}
const nameObj = new Person("Amaze", "Name");
const nameToDisplay = <h1>Hello, {nameObj.fullName()}</h1>;

class Clock extends Component {
  render() {
    return (
      <h2>Current Time is: {new Date().toLocaleTimeString()} </h2>
    );
  }
}

class App extends Component{
  render(){
    return(
      <div className="App">
        {nameToDisplay}
        <Clock />
      </div>
    );
  }
}

export default hot(module)(App);