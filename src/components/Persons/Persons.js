import React, { PureComponent } from "react";

import Person from "./Person/Person";

//NOTE: Using PureComponent checks if there are actually changes to the state, so if we use this everywhere we will get a performance hit.
class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log("[Persons.js] Inside constructor", props);
        //NOTE: State could be initialized here, to access it with `this.state`
        this.lastPersonRef = React.createRef();
    }

    componentWillMount() {
        console.log("[Persons.js] Inside componentWillMount()");
    }

    componentDidMount() {
        console.log("[Persons.js] Inside componentDidMount()");
        this.lastPersonRef.current.focus();
    }

    // Update lifecycle methods
    componentWillReceiveProps(nextProps) {
        console.log("[UPDATE Persons.js] Inside componentWillReceiveProps()", nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("[UPDATE Persons.js] Inside shouldComponentUpdate()", nextProps, nextState);
    //     // Here we should check if the props that are import for this component did in fact change and then update
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.click !== this.props.click;
    // }

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
                position={index}
                name={person.name}
                age={person.age}
                ref={this.lastPersonRef}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
        });
    }
}

export default Persons;