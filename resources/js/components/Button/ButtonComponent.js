import React from "React";

const ButtonComponent = ({ name, classNames }) => {
    return <button className={`welcome-button ${classNames}`}>{name}</button>;
};

export default ButtonComponent;
