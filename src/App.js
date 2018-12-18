import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "André", age: 35 },
      { name: "Elio", age: 25 },
      { name: "Vasco", age: 38 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>This is a react app</h1>
        <button>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I like to create games.</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );

    // This is the same as the code above
    //return React.createElement("div", { className: "App" }, React.createElement("h1", null, "This is a react app"));
  }
}

export default App;
