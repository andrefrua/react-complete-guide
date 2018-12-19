import React from "react";

import classes from "./Cockpit.css";
import Aux from "../../hoc/Aux";

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = classes.Button;

    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(" ");
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); //classes = ["red"]
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); //classes = ["red", "bold"]
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            {/* This way of calling a method is not recommended because it can be ineficient, however it can be used if needed */}
            <p className={assignedClasses.join(" ")}>This is really working :D</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle persons</button>
            <button onClick={props.login}>Log in</button>
        </Aux>
        // NOTE: With React 16.2 we can use Fragment like below, that does the same as our Aux component did
        // <>
        //     <h1>{props.appTitle}</h1>
        //     {/* This way of calling a method is not recommended because it can be ineficient, however it can be used if needed */}
        //     <p className={assignedClasses.join(" ")}>This is really working :D</p>
        //     <button
        //         className={btnClass}
        //         onClick={props.clicked}>Toggle persons</button>
        // </>
    );
};

export default cockpit;