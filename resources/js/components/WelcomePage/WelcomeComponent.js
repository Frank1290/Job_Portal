import React, { Component } from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../Button/ButtonComponent";
const button = {
    post: "Post Job",
    search: "Search Job",
    style: "text-white btn-primary"
};

const WelcomeComponent = () => {
    return (
        <div>
            <h2 className="heading">WELCOME TO JOB PORTAL</h2>
            <div className="button-pos">
                <Link to="/postJob">
                    <ButtonComponent name={button.post} sty={button.style} />
                    <ButtonComponent name={button.search} />
                </Link>

                {/* <button className="welcome-button">Search Job</button> */}
            </div>
        </div>
    );
};

export default WelcomeComponent;
