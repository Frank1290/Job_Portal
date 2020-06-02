import React from "react";

const PostJobComponent = () => {
    return (
        <div className="job-post-wrapper">
            <div className="section">
                <div className="postdetails">
                    <h3>Post Your Job</h3>
                </div>
                <div className="job-inputs">
                    <div className="row">
                        <div className="col-sm-2">
                            <label>Title for your job</label>
                        </div>
                        <div className="col-sm-10 space">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="ex, Human Resource Manager"
                            ></input>
                        </div>

                        <div className="col-sm-2">
                            <label>Company</label>
                        </div>
                        <div className="col-sm-10 space">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="ex,ABCINFOTECH"
                            ></input>
                        </div>

                        <div className="col-sm-2">
                            <label>Skills</label>
                        </div>
                        <div className="col-sm-10 space">
                            <textarea
                                className="form-control"
                                id="textarea"
                                placeholder="Write few lines about your skills"
                                rows="8"
                            ></textarea>
                        </div>

                        <div className="col-sm-2">
                            <label>Description</label>
                        </div>
                        <div className="col-sm-10 space">
                            <textarea
                                className="form-control"
                                id="textarea"
                                placeholder="Write few lines about your jobs"
                                rows="8"
                            ></textarea>
                        </div>

                        <div className="col-sm-2">
                            <label>Role</label>
                        </div>
                        <div className="col-sm-10 space">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Role"
                            ></input>
                        </div>
                        <div className="col-sm-2">
                            <label>Experience</label>
                        </div>
                        <div className="col-sm-10 space">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="ex, Human Resource Manager"
                            ></input>
                        </div>

                        <div className="col-sm-2">
                            <label>Salary Range</label>
                        </div>
                        <div className="col-sm-10 space">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="ex, Human Resource Manager"
                            ></input>
                        </div>

                        <div className="col-sm-2">
                            <label>Post</label>
                        </div>
                        <div className="col-sm-10 space">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="ex, Jr Developer,Analyst,Tester"
                            ></input>
                        </div>

                        <div className="col-sm-2">
                            <label>Qualification</label>
                        </div>
                        <div className="col-sm-10 space">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="ex, B.E,B.Tech,MBA"
                            ></input>
                        </div>

                        <div className="col-sm-2">
                            <label>Search Key</label>
                        </div>
                        <div className="col-sm-10 space">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search Through Keys"
                            ></input>
                        </div>

                        <div className="col-sm-2">
                            <label>Job Type</label>
                        </div>
                        <div className="col-sm-10 space ">
                            <input
                                type="radio"
                                name="sellType"
                                value="full-time"
                                id="full-time"
                            />{" "}
                            <label for="full-time" className="radio-label">
                                Full Time
                            </label>
                            <input
                                type="radio"
                                name="sellType"
                                value="part-time"
                                id="part-time"
                            />{" "}
                            <label for="part-time" className="radio-label">
                                Part Time
                            </label>
                            <input
                                type="radio"
                                name="sellType"
                                value="freelance"
                                id="freelance"
                            />{" "}
                            <label for="freelance" className="radio-label">
                                Freelance
                            </label>
                            <input
                                type="radio"
                                name="sellType"
                                value="contract"
                                id="contract"
                            />{" "}
                            <label for="contract" className="radio-label">
                                Contract
                            </label>
                        </div>

                        <div className="col-sm-2">
                            <label>Location</label>
                        </div>
                        <div className="col-sm-10 space">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="ex, Human Resource Manager"
                            ></input>
                        </div>

                        <div className="col-sm-2">
                            <label>Email</label>
                        </div>
                        <div className="col-sm-10 space">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="abc@gmail.com"
                            ></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostJobComponent;
