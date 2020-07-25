import React from "react";
import JobGridComponent from "./JobGridComponent";

const JobListComponent = ({ jobList }) => {
    return (
        <div>
            {jobList.length &&
                jobList.map(jobObj => {
                    return (
                        <JobGridComponent key={jobObj.id} jobInfo={jobObj} />
                    );
                })}
        </div>
    );
};
export default JobListComponent;
