import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class WelcomeComponent extends Component {
    render() {
        return (
            <div className="welcome-page-wrapper">
                <h2 className="heading">WELCOME TO JOB PORTAL</h2>
                <button className="welcome-button text-white btn-primary">
                    ADD Job
                </button>

                <button className="welcome-button">Search Job</button>
            </div>
        );
    }
}
