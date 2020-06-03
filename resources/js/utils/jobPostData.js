const jobPostObj = {
    title: {
        type: "text",
        label: "Title for your job",
        placeholder: "ex, Human Resource Manager",
        isRequired: true,
        value: ""
    },
    company: {
        type: "text",
        label: "Company Name",
        placeholder: "ex,ABCINFOTECH",
        isRequired: true,
        value: ""
    },
    skills: {
        type: "textarea",
        label: "Skills",
        isRequired: true,
        value: "",
        placeholder: "Write few lines about your skills"
    },
    description: {
        type: "textarea",
        label: "Job Description",
        isRequired: true,
        value: "",
        placeholder: "Write description"
    },
    roles: {
        type: "text",
        label: "Role",
        isRequired: true,
        value: "",
        placeholder: "Role"
    },
    experience: {
        type: "number",
        label: "Experience Required",
        isRequired: true,
        value: "",
        placeholder: "experience in yrs"
    },
    salary_range: {
        type: "text",
        label: "Salary",
        isRequired: true,
        value: "",
        placeholder: "ex, 1L -2L per annum"
    },
    post: {
        type: "text",
        label: "Job Post",
        isRequired: true,
        value: "",
        placeholder: "ex, Jr Developer,Analyst,Tester"
    },
    qualification: {
        type: "text",
        label: "Qualification",
        isRequired: true,
        value: "",
        placeholder: "ex, B.E,B.Tech,MBA"
    },
    search_key: {
        type: "text",
        label: "Searh Keys",
        isRequired: true,
        value: "",
        placeholder: "ex,php js,c,c++"
    },
    type: {
        type: "radio",
        label: "Job Type",
        isRequired: true,
        value: "",
        default: ["FullTime", "PartTime", "Freelance", "Contract"]
    },
    location: {
        type: "text",
        label: "Location",
        isRequired: true,
        value: "",
        placeholder: "ex, Nagpur,Mumbai,Pune"
    },
    email: {
        type: "email",
        label: "HR Email Id",
        isRequired: true,
        value: "",
        placeholder: "abc@gmail.com"
    }
};

export default jobPostObj;
