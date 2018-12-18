import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "André", age: 35 },
      { name: "Elio", age: 25 },
      { name: "Vasco", age: 38 }
    ],
    otherState: "Some value"
  }

  switchNameHandler = (newName) => {
    // DON'T DO THIS: The state shouldn't be manipulated directly
    //this.state.persons[0].name = "André Rua";
    // NOTE: React only updates the DOM when there are changes on the state or on props
    this.setState({
      persons: [
        { name: newName, age: 35 },
        { name: "Elio Freitas", age: 25 },
        { name: "Vasco Gervásio", age: 38 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "André Rua", age: 35 },
        { name: event.target.value, age: 25 },
        { name: "Vasco Gervásio", age: 38 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>This is a react app</h1>
        {/* This way of calling a method is not recommended because it can be ineficient, however it can be used if needed */}
        <button onClick={() => this.switchNameHandler("Bad potato!")}>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Good potato")}
          changed={this.nameChangedHandler}>I like to create games.</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );

    // This is the same as the code above
    //return React.createElement("div", { className: "App" }, React.createElement("h1", null, "This is a react app"));
  }
}

export default App;
