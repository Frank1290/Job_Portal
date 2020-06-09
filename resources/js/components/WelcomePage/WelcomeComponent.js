import React from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../Button/ButtonComponent";
const buttonObj = {
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
                    <ButtonComponent
                        name={buttonObj.post}
                        classNames={buttonObj.style}
                    />
                </Link>
                <ButtonComponent name={buttonObj.search} />
            </div>
        </div>
    );
};

export default WelcomeComponent;
