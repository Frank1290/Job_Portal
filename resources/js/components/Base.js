import React from "react";

// const Base = props => {
//     // const children = props.children;
//     const { children } = props; // destructuring

//     return <div>{children}</div>;
// };

const Base = ({ children }) => {
    return (
        <div>
            <div className="welcome-page-wrapper">{children}</div>
        </div>
    );
};
export default Base;
