import React, { Component } from "react";
import axios from "axios";

import SearchBarComponent from "./SearchBarComponent";

import JobListComponent from "./JobListComponent";

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
        // axios
        //     .get(
        //         "https://suggest.naukri.com/suggest/autosuggest?query=java&appId=105&vertical=pFrea_18&category=skill&limit=7"
        //     )
        //     .then(response => {
        //         console.log(response);
        //     });
    }

    render() {
        return (
            <div>
                <SearchBarComponent />
                <JobListComponent jobList={this.state.jobList} />
            </div>
        );
    }
}
