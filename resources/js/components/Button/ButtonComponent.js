import React from "React";
import PropTypes from "prop-types";

const ButtonComponent = ({ name, sty }) => {
    console.log(name, sty);

    return <button className={`welcome-button ${sty}`}>{name}</button>;
};

export default ButtonComponent;
