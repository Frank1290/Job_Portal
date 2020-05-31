import React from "react";

// const Base = props => {
//     // const children = props.children;
//     const { children } = props; // destructuring

//     return <div>{children}</div>;
// };

const Base = ({ children }) => {
    return (
        <div>
            <h1>HEADING</h1>
            <div className="welcome-page-wrapper">{children}</div>
        </div>
    );
};
export default Base;
