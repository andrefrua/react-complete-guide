import React from "react";

import Person from "./Person/Person";
// ES6 for function with only a return it can ommit the return statment. This is a ES6 feature, nothing to do with React itself
const persons = (props) => props.persons.map((person, index) => {
    return <Person
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => props.changed(event, person.id)} />
});

export default persons;