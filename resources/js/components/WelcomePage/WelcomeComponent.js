import React from "react";
import { Link } from "react-router-dom";
const WelcomeComponent = () => (
    <div>
        <h2 className="heading">WELCOME TO JOB PORTAL</h2>
        <div className="button-pos">
            <Link to="/postJob">
                <button className="welcome-button text-white btn-primary">
                    ADD Job
                </button>
            </Link>

            <button className="welcome-button">Search Job</button>
        </div>
    </div>
);

export default WelcomeComponent;
