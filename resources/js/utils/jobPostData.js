const jobPostObj = {
    title: {
        type: "text",
        label: "Title for your job",
        placeholder: "ex, Human Resource Manager",
        isRequired: true,
        value: "",
        error: ""
    },
    company: {
        type: "text",
        label: "Company Name",
        placeholder: "ex,ABCINFOTECH",
        isRequired: true,
        value: "",
        error: ""
    },
    skills: {
        type: "textarea",
        label: "Skills",
        isRequired: true,
        value: "",
        error: "",
        placeholder: "Write few lines about your skills"
    },
    description: {
        type: "textarea",
        label: "Job Description",
        isRequired: true,
        value: "",
        error: "",
        placeholder: "Write description"
    },
    roles: {
        type: "text",
        label: "Role",
        isRequired: true,
        value: "",
        error: "",
        placeholder: "Role"
    },
    experience: {
        type: "number",
        label: "Experience Required",
        isRequired: true,
        value: "",
        error: "",
        placeholder: "experience in yrs"
    },
    salary_range: {
        type: "text",
        label: "Salary",
        isRequired: true,
        value: "",
        error: "",
        placeholder: "ex, 1L -2L per annum"
    },
    post: {
        type: "text",
        label: "Job Post",
        isRequired: true,
        value: "",
        error: "",
        placeholder: "ex, Jr Developer,Analyst,Tester"
    },
    qualification: {
        type: "text",
        label: "Qualification",
        isRequired: true,
        value: "",
        error: "",
        placeholder: "ex, B.E,B.Tech,MBA"
    },
    search_key: {
        type: "text",
        label: "Searh Keys",
        isRequired: true,
        value: "",
        error: "",
        placeholder: "ex,php js,c,c++"
    },
    type: {
        type: "radio",
        label: "Job Type",
        isRequired: true,
        value: "",
        error: "",
        default: ["FullTime", "PartTime", "Freelance", "Contract"]
    },
    location: {
        type: "text",
        label: "Location",
        isRequired: true,
        value: "",
        error: "",
        placeholder: "ex, Nagpur,Mumbai,Pune"
    },
    email: {
        type: "email",
        label: "HR Email Id",
        isRequired: true,
        value: "",
        error: "",
        placeholder: "abc@gmail.com"
    },
    apply_link: {
        type: "text",
        label: "Job Link",
        isRequired: true,
        value: "",
        error: "",
        placeholder: "company link"
    }
};

export default jobPostObj;
