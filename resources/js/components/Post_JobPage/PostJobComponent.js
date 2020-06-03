import React, { Component } from "react";
import jobPostObj from "../../utils/jobPostData";
import InputWrapper from "./InputWrapperComponent";

export default class PostJobComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobPost: jobPostObj
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(event) {
        const { name, value } = event.target;
        this.setState({
            jobPost: {
                ...this.state.jobPost,
                [name]: {
                    ...this.state.jobPost[name],
                    value: value
                }
            }
        });
    }

    render() {
        const { jobPost } = this.state;
        return (
            <div className="job-post-wrapper">
                <div className="section">
                    <div className="postdetails">
                        <h3>Post Your Job</h3>
                    </div>
                    <div className="job-inputs">
                        {Object.keys(jobPost).map(key => {
                            return (
                                <InputWrapper
                                    id={key}
                                    inputObj={jobPost[key]}
                                    onChange={this.handleOnChange}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
