import React, { Component } from "react";

//Example using a class factory
const withClass = (WrappedComponent, className) => {
    const WithClass = class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
                </div>
            )
        }
    }

    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardedRef={ref} />
    });
}


// Example with functional component
// const withClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             {/* Passes the props into the children component using the spread operator */}
//             <WrappedComponent {...props} />
//         </div>
//     )
// }

export default withClass;


//Normal way
// import React from "react";

// const withClass = (props) => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// )

// export default withClass;