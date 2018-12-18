import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "aaa", name: "André", age: 35 },
      { id: "bbb", name: "Elio", age: 25 },
      { id: "ccc", name: "Vasco", age: 38 },
      { id: "ddd", name: "Paula", age: 35 },
      { id: "eee", name: "Vera", age: 37 }
    ],
    otherState: "Some value",
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    // NOTE: This is the best approach to update information in the state without manipulating any part of the state directly
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }
    // This is the same, just with old syntax
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    /*
      DON'T DO THIS. Since the objects are pointers instead of new objects we are not creating a new object, instead using 
      the same reference to the original object, thus when we use splice on the persons object we are actually mutating the actual state and
      we shouldn't manipulate the state directly.
    
      const persons = this.state.persons;
      persons.splice(personIndex, 1);
      this.setState({ persons: persons });
    */
    const persons = [...this.state.persons]; // Using the spread operator `...` we are copying all the elements inside the array into the new one.
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              );
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>This is a react app</h1>
        {/* This way of calling a method is not recommended because it can be ineficient, however it can be used if needed */}
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    );

    // This is the same as the code above
    //return React.createElement("div", { className: "App" }, React.createElement("h1", null, "This is a react app"));
  }
}

export default App;
