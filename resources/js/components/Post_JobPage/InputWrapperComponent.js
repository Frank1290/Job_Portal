import React from "react";
import PropTypes from "prop-types";

const InputWrapperComponent = ({ id, inputObj, onChange, onBlur }) => {
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
                        onBlur={onBlur}
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
                        name={id}
                        className="form-control"
                        min={inputObj.min}
                        required={isRequired}
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                );
            case "textarea":
                return (
                    <textarea
                        id={id}
                        name={id}
                        required={isRequired}
                        className="form-control"
                        placeholder={placeholder}
                        onChange={onChange}
                        onBlur={onBlur}
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
                                <span key={value}>
                                    <input
                                        type={type}
                                        name={id}
                                        value={value}
                                        id={id}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                    />{" "}
                                    <label
                                        htmlFor={value}
                                        className="radio-label"
                                    >
                                        {value}
                                    </label>
                                </span>
                            );
                        })}
                    </>
                );
            default:
                return (
                    <input
                        type={type}
                        id={id}
                        onChange={onChange}
                        onBlur={onBlur}
                        required
                    />
                );
        }
    };
    return (
        <div className="row space" key={id}>
            <div className="col-sm-2">
                <label htmlFor={id}>{inputObj.label}</label>
            </div>
            <div className="col-sm-10">
                <div>{renderSwitch()}</div>
                <div className="text-danger">{inputObj.error}</div>
            </div>
        </div>
    );
};
InputWrapperComponent.prototype = {
    id: PropTypes.string.isRequired,
    inputObj: PropTypes.shape({
        type: PropTypes.string,
        label: PropTypes.string,
        isRequired: PropTypes.bool,
        placeholder: PropTypes.string,
        value: PropTypes.string,
        error: PropTypes.string
    }),
    onChange: PropTypes.func,
    onBlur: PropTypes.func
};

export default InputWrapperComponent;
