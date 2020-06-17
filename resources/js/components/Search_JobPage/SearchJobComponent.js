import React, { Component } from "react";
import axios from "axios";

import JobGridComponent from "./JobGridComponent";

export default class SearchJobComponent extends Component {
    constructor() {
        super();
        this.state = {
            jobList: [],
            obj: {
                title: "Senior Marketing Officer,Generator",
                company: "Shomka Agency",
                posted: "January 6,2020",
                location: "India, Mumbai",
                salary: "$1260",
                type: "Full-Time"
            }
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
                <div>
                    <JobGridComponent jobInfo={this.state.obj} />
                </div>
                <div>
                    {this.state.jobList.map(list => {
                        return <h2>Title : {list.title}</h2>;
                    })}
                </div>
            </div>
        );
    }
}
