import React from "react";

import classes from "./Cockpit.css";

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = "";

    if (props.showPersons) {
        btnClass = classes.red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); //classes = ["red"]
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); //classes = ["red", "bold"]
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            {/* This way of calling a method is not recommended because it can be ineficient, however it can be used if needed */}
            <p className={assignedClasses.join(" ")}>This is really working :D</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle persons</button>
        </div>
    );
};

export default cockpit;