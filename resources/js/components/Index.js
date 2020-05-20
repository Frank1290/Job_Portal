import React, { Component } from "react";
import ReactDOM from "react-dom";
import WelcomeComponent from "./WelcomePage/WelcomeComponent";

export default class Index extends Component {
    render() {
        return (
            <div>
                <WelcomeComponent />
            </div>
        );
    }
}

if (document.getElementById("app")) {
    ReactDOM.render(<Index />, document.getElementById("app"));
}
