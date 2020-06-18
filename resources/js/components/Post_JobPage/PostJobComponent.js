import React, { Component } from "react";
import axios from "axios";
import jobPostObj from "../../utils/jobPostData";
import InputWrapper from "../Core/InputWrapperComponent";
import { getToken } from "../../utils/service";

export default class PostJobComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authToken: "",
            jobPost: jobPostObj,
            isFormError: false,
            isBackendError: false,
            isLoading: false,
            isSuccess: false
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
        this.postData = this.postData.bind(this);
    }

    componentDidMount() {
        const fetchData = async () => {
            const result = await getToken();
            this.setState({ authToken: result.data.auth_token });
        };
        fetchData();
    }
    scrollToTop() {
        window.scrollTo({
            top: 20,
            left: 0,
            behavior: "smooth"
        });
    }

    handleOnBlur(event) {
        const { name, value } = event.target;
        const { label, isRequired } = this.state.jobPost[name];
        let error = "";
        if (isRequired && value === "") {
            error = `Please enter required field: ${label}`;
        }
        this.setState({
            jobPost: {
                ...this.state.jobPost,
                [name]: {
                    ...this.state.jobPost[name],
                    error
                }
            },
            isFormError: false,
            isBackendError: false
        });
    }
    handleOnChange(event, obj) {
        if (event === "location") {
            const { jobPost } = this.state;
            this.setState({
                jobPost: {
                    ...jobPost,
                    [event]: {
                        ...jobPost[event],
                        value: obj.value,
                        error: "",
                        default: {
                            ...jobPost[event].default,
                            [obj.key]: {
                                ...jobPost[event].default[obj.key],
                                value: obj.value
                            }
                        }
                    }
                }
            });
        } else {
            const { name, value } = event.target;
            this.setState({
                jobPost: {
                    ...this.state.jobPost,
                    [name]: {
                        ...this.state.jobPost[name],
                        value: value,
                        error: ""
                    }
                }
            });
        }
    }
    postData() {
        const { jobPost } = this.state;
        const keyArr = Object.keys(jobPost);
        const newArrOfObj = keyArr.map(key => {
            let newObj = { [key]: jobPost[key].value };
            if (key === "location") {
                const { default: defaultObj } = jobPost[key];
                let locationValue = "";
                Object.keys(defaultObj).map(key => {
                    locationValue = `${locationValue}${
                        locationValue ? "," : ""
                    }${defaultObj[key].value}`;
                });
                newObj = { [key]: locationValue };
            }
            return newObj;
        });
        const requestPayload = newArrOfObj.reduce((acc, cur) => {
            const reducedObj = { ...acc, ...cur };
            return reducedObj;
        }, {});
        const isValidForm =
            Object.values(requestPayload).filter(val => val).length === 14;
        if (isValidForm) {
            this.setState({ isFormError: false, isLoading: true });
            axios
                .post("/api/postJob", requestPayload)
                .then(response => {
                    this.scrollToTop();

                    this.setState({
                        isLoading: false,
                        isSuccess: true,
                        jobPost: jobPostObj
                    });
                })
                .catch(error => {
                    this.scrollToTop();
                    this.setState({ isBackendError: true, isLoading: false });
                });
        } else {
            this.scrollToTop();
            const jobPostErrors = Object.keys(jobPost).reduce((acc, key) => {
                return {
                    ...acc,
                    [key]: {
                        ...jobPost[key],
                        error: jobPost[key].value
                            ? ""
                            : `Please enter required field: ${jobPost[key].label}`
                    }
                };
            }, {});
            this.setState({
                jobPost: jobPostErrors,
                isFormError: true,
                isBackendError: false
            });
        }
    }

    render() {
        const {
            jobPost,
            isFormError,
            isBackendError,
            isLoading,
            isSuccess,
            authToken
        } = this.state;
        return (
            <div className="job-post-wrapper">
                <div className="section">
                    <div className="postdetails">
                        <h3>Post Your Job</h3>
                    </div>
                    <div className="job-inputs">
                        {isFormError && (
                            <div className="text-danger text-center border border-danger rounded mb-1">
                                Please Enter all Required Fields !!
                            </div>
                        )}
                        {isBackendError && (
                            <div className="text-danger text-center border border-danger rounded mb-1">
                                Something went wrong !!
                            </div>
                        )}
                        {isSuccess && (
                            <div className="text-success text-center border border-success rounded mb-1">
                                Form Submitted Successfully!!
                            </div>
                        )}
                        {Object.keys(jobPost).map(key => {
                            return (
                                <InputWrapper
                                    id={key}
                                    inputObj={jobPost[key]}
                                    onChange={this.handleOnChange}
                                    onBlur={this.handleOnBlur}
                                    authToken={authToken}
                                />
                            );
                        })}
                    </div>
                    <div className="post-btn">
                        <button
                            className="btn btn-primary"
                            onClick={this.postData}
                        >
                            {isLoading ? (
                                <>
                                    <span
                                        className="spinner-border spinner-border-sm"
                                        role="status"
                                        aria-hidden="true"
                                    ></span>
                                    Loading...
                                </>
                            ) : (
                                <>Post Job</>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
