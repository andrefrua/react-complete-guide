import React, { Component } from "react";

import Person from "./Person/Person";
// ES6 for function with only a return it can ommit the return statment. This is a ES6 feature, nothing to do with React itself
class Persons extends Component {
    constructor(props) {
        super(props);
        console.log("[Persons.js] Inside constructor", props);
        //NOTE: State could be initialized here, to access it with `this.state`
    }

    componentWillMount() {
        console.log("[Persons.js] Inside componentWillMount()");
    }

    componentDidMount() {
        console.log("[Persons.js] Inside componentDidMount()");
    }

    // Update lifecycle methods
    componentWillReceiveProps(nextProps) {
        console.log("[UPDATE Persons.js] Inside componentWillReceiveProps()", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[UPDATE Persons.js] Inside shouldComponentUpdate()", nextProps, nextState);
        // Here we should check if the props that are import for this component did in fact change and then update
        return nextProps.persons !== this.props.persons;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("[UPDATE Persons.js] Inside componentWillUpdate()", nextProps, nextState);
    }

    componentDidUpdate() {
        console.log("[UPDATE Persons.js] Inside componentDidUpdate()");
    }

    render() {
        console.log("[Persons.js] Inside render()");
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
        });
    }
}

export default Persons;