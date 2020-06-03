import React from "react";
import PropTypes from "prop-types";

const InputWrapperComponent = ({ id, inputObj, onChange }) => {
    const renderSwitch = () => {
        const { type, isRequired, placeholder, value } = inputObj;
        switch (type) {
            case "text":
            case "email":
                return (
                    <input
                        type={type}
                        id={id}
                        className="form-control"
                        onChange={onChange}
                        required={isRequired}
                        placeholder={placeholder}
                        value={value}
                        name={id}
                    />
                );

            case "number":
                return (
                    <input
                        type="number"
                        id={id}
                        className="form-control"
                        min={inputObj.min}
                        required={isRequired}
                        onChange={onChange}
                    />
                );
            case "textarea":
                return (
                    <textarea
                        id={id}
                        required={isRequired}
                        className="form-control"
                        placeholder={placeholder}
                        rows="8"
                    ></textarea>
                );
            case "dropdown":
                return (
                    <div className="input-append btn-group">
                        <input
                            className="span2"
                            id="appendedInputButton"
                            size="16"
                            type="text"
                        />
                        <a
                            className="btn btn-primary dropdown-toggle"
                            data-toggle="dropdown"
                            href="#"
                        >
                            <span className="caret"></span>
                        </a>
                        <ul className="dropdown-menu">
                            {inputObj.default.map(jobType => {
                                return (
                                    <li>
                                        <a href="#">
                                            <i className="icon-pencil"></i>{" "}
                                            {jobType}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            case "radio":
                return (
                    <>
                        {inputObj.default.map(value => {
                            return (
                                <>
                                    <input
                                        type={type}
                                        name={id}
                                        value={value}
                                        id={id}
                                    />{" "}
                                    <label for={value} className="radio-label">
                                        {value}
                                    </label>
                                </>
                            );
                        })}
                    </>
                );
            default:
                return (
                    <input type={type} id={id} onChange={onChange} required />
                );
        }
    };
    return (
        <div className="row">
            <div className="col-sm-2">
                <label htmlFor={id}>{inputObj.label}</label>
            </div>
            <div className="col-sm-10 space">{renderSwitch()}</div>
        </div>
    );
};
InputWrapperComponent.prototype = {
    id: PropTypes.string.isRequired,
    inputObj: PropTypes.shape({
        type: PropTypes.string,
        label: PropTypes.string,
        isRequired: PropTypes.bool
    }),
    onChange: PropTypes.func
};

export default InputWrapperComponent;
