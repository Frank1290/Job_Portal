import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router";
import WelcomeComponent from "./WelcomePage/WelcomeComponent";
import PostJobComponent from "./Post_JobPage/PostJobComponent";
import SearchJobComponent from "./Search_JobPage/SearchJobComponent";

import Base from "./Base";

export default class Index extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Base>
                        <Route path="/" exact={true}>
                            <WelcomeComponent />
                        </Route>
                        <Route path="/postJob" exact={true}>
                            <PostJobComponent />
                        </Route>
                        <Route path="/searchJob" exact={true}>
                            <SearchJobComponent />
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
