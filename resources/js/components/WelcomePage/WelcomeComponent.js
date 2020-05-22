import React from "react";
import ReactDOM from "react-dom";
const WelcomeComponent = () => (
    <div className="welcome-page-wrapper">
        <h2 className="heading">WELCOME TO JOB PORTAL</h2>
        <button className="welcome-button text-white btn-primary">
            ADD Job
        </button>

        <button className="welcome-button">Search Job</button>
    </div>
);

export default WelcomeComponent;
