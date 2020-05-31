import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router";
import WelcomeComponent from "./WelcomePage/WelcomeComponent";
import Base from "./Base";

export default class Index extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Base>
                        <Route path="/">
                            <WelcomeComponent />
                        </Route>
                        <Route path="/post">
                            <WelcomeComponent />
                        </Route>
                    </Base>
                </Switch>
            </Router>
        );
    }
}

if (document.getElementById("app")) {
    ReactDOM.render(<Index />, document.getElementById("app"));
}
