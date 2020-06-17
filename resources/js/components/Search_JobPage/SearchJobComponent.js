import React, { Component } from "react";
import SearchBarComponent from "./SearchBarComponent";
import axios from "axios";

export default class SearchJobComponent extends Component {
    constructor() {
        super();
        this.state = {
            jobList: []
        };
    }
    componentDidMount() {
        this.getJobList();
    }
    getJobList() {
        axios.get("http://localhost:8000/api/getJobList").then(response => {
            this.setState({ jobList: response.data });
        });
    }

    render() {
        return (
            <div>
                <SearchBarComponent />
                <div>
                    {this.state.jobList.map(list => {
                        return <h2>Title : {list.title}</h2>;
                    })}
                </div>
            </div>
        );
    }
}
