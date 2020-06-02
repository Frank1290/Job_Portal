const jobPostObj = [
    {
        title: {
            type: "text",
            label: "Job Posting Title",
            isRequired: true
        },
        company: {
            type: "text",
            label: "Company Name",
            isRequired: true
        }
    },
    {
        skills: {
            type: "textarea",
            label: "Skill Set",
            isRequired: true
        },
        description: {
            type: "textarea",
            label: "Job Description",
            isRequired: true
        }
    },
    {
        roles: {
            type: "text",
            label: "Role",
            isRequired: true
        },  
        experience: {
            type: "number",
            label: "Experience Required",
            isRequired: true
        }
    },
    {
        salary_range: {
            type: "text",
            label: "Salary",
            isRequired: true
        },
        post: {
            type: "text",
            label: "Job Post",
            isRequired: true
        }
    },
    {
        qualification: {
            type: "text",
            label: "Qalification",
            isRequired: true
        },
        search_key: {
            type: "text",
            label: "Searh Keys",
            isRequired: true
        }
    },
    {
        type: {
            type: "dropdown",
            label: "Job Type",
            isRequired: true,
            default: ["FullTime", "Contract"]
        },
        location: {
            type: "text",
            label: "Location",
            isRequired: true
        }
    },
    {
        email: {
            type: "email",
            label: "HR Email Id",
            isRequired: true
        }
    }
];

export default jobPostObj;
