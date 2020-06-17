import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const DropdownComponent = ({ onChange }) => {
    const [title, setTitle] = useState("Dropdown");
    const handleOnClick = event => {
        const { id: value } = event.target;
        setTitle(value);
    };

    return (
        <div className="dropdown">
            <button
                className="btn dropdown-button dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                {title}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li
                    key="dev"
                    className="dropdown-item"
                    onClick={handleOnClick}
                    id="dev"
                >
                    dev
                </li>
            </ul>
        </div>
    );
};

DropdownComponent.prototype = {
    onChange: PropTypes.func
};

export default DropdownComponent;
