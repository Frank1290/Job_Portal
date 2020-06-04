import React, { Component } from "react";
import axios from "axios";
import jobPostObj from "../../utils/jobPostData";
import InputWrapper from "./InputWrapperComponent";

export default class PostJobComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobPost: jobPostObj
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.postData = this.postData.bind(this);
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
    postData() {
        const { jobPost } = this.state;
        const keyArr = Object.keys(jobPost);
        const newArrOfObj = keyArr.map(key => {
            const newObj = { [key]: jobPost[key].value };
            return newObj;
        });
        const requestPayload = newArrOfObj.reduce((acc, cur) => {
            const reducedObj = { ...acc, ...cur };
            return reducedObj;
        }, {});
        const isValidForm =
            Object.values(requestPayload).filter(val => val).length === 14;
        if (isValidForm) {
            axios
                .post("/api/postJob", requestPayload)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            alert("Please Enter  all Fields !!");
        }
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
                    <div className="post-btn">
                        <button
                            className="btn btn-primary"
                            onClick={this.postData}
                        >
                            Post Job
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
