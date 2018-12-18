import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is a react app</h1>
      </div>
    );

    // This is the same as the code above
    //return React.createElement("div", { className: "App" }, React.createElement("h1", null, "This is a react app"));
  }
}

export default App;
