import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

export default class Index extends Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}

if (document.getElementById("app")) {
    ReactDOM.render(<Index />, document.getElementById("app"));
}
