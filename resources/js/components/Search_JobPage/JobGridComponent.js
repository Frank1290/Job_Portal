import React from "react";
import PropTypes from "prop-types";

const JobGridComponent = ({ jobInfo }) => {
    return (
        <div className="job-lists">
            <div className="logo-section" className="photo">
                <img src="/images/cutting-edge1.png" />
            </div>
            <div className="job-list-section">
                <div className="job-title">
                    <span>{jobInfo.title}</span>
                </div>
                <div className="company-info">
                    <span className="company-name">{jobInfo.company}</span>
                    <span>Posted:{jobInfo.posted}</span>
                </div>

                <div className="company-info-details">
                    <span className="common-margin">{jobInfo.location}</span>

                    <span className="common-margin">
                        {jobInfo.salary}/Month
                    </span>
                    <span className="type">{jobInfo.type}</span>
                </div>
            </div>
        </div>
    );
};
JobGridComponent.prototype = {
    jobInfo: PropTypes.shape({
        title: PropTypes.string,
        company: PropTypes.string,
        posted: PropTypes.string,
        location: PropTypes.string,
        salary: PropTypes.string,
        type: PropTypes.string
    })
};
export default JobGridComponent;
