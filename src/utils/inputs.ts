//Icons
import {
    faEnvelope,
    faLock,
    faUser,
    faIdCard,
    faBriefcase,
    faMapLocationDot,
    faStopwatch,
    faMoneyCheckDollar,
    faCircleInfo,
    faUnlock,
    faHourglassStart,
    faHourglassHalf,
    faBookReader,
    faUserGear,
    faSquarePhone,
    faClipboardUser,
    faUsersGear,
    faUserTie,
    faUserCheck,
    faLayerGroup,
    faFileContract,
    faPersonCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import jobCategory from './jobCategory';

const UserTypeLoadOptions = async (inputValue: string) => {
    try {
        const userTypeOptions = [
            { value: 'EMPLOYER', label: 'Employer', icon: faUserTie },
            { value: 'WORKER', label: 'Worker', icon: faUserCheck },
        ].filter((e) => e.label.toLowerCase().includes(inputValue.toLowerCase()));
        return userTypeOptions;
    } catch (e) {
        return [];
    }
};

const jobTypeLoadOptions = async (inputValue: string) => {
    try {
        const jobTypeOptions = [
            { value: 'FULL_TIME', label: 'Full Time', icon: faHourglassStart },
            { value: 'PART_TIME', label: 'Part Time', icon: faHourglassHalf },
            { value: 'CONTRACT', label: 'Contract', icon: faFileContract },
            { value: 'TEMPORARY', label: 'Temporary', icon: faStopwatch },
            { value: 'INTERN', label: 'Intern', icon: faPersonCircleCheck },
        ].filter((e) => e.label.toLowerCase().includes(inputValue.toLowerCase()));
        return jobTypeOptions;
    } catch (e) {
        return [];
    }
};

const jobCategoryLoadOptions = async (inputValue: string) => {
    try {
        const jobCategoryOptions = jobCategory.filter((e) => e.label.toLowerCase().includes(inputValue.toLowerCase()));
        return jobCategoryOptions;
    } catch (e) {
        return [];
    }
};

const jobStatusLoadOptions = async (inputValue: string) => {
    try {
        const userTypeOptions = [
            { value: 'OPEN', label: 'Open', icon: faUnlock },
            { value: 'CLOSE', label: 'Close', icon: faLock },
        ].filter((e) => e.label.toLowerCase().includes(inputValue.toLowerCase()));
        return userTypeOptions;
    } catch (e) {
        return [];
    }
};

const EmployerTypeLoadOptions = async (inputValue: string) => {
    try {
        const userTypeOptions = [
            { value: 'ORGANISATION', label: 'Organisation', icon: faUserTie },
            { value: 'PERSON', label: 'Person', icon: faUserCheck },
        ].filter((e) => e.label.toLowerCase().includes(inputValue.toLowerCase()));
        return userTypeOptions;
    } catch (e) {
        return [];
    }
};

// AUTH  IMPUTS
const email = { label: 'Email', type: 'email', placeholder: 'asher@gmail.com', name: 'email', required: true, icon: faEnvelope };
const password = { label: 'Password', type: 'password', placeholder: '******', name: 'password', required: true, icon: faLock };

const loginInputs = [{ ...email }, { ...password }];
const registerInputs = [
    { label: 'Full Name', type: 'text', placeholder: 'Asher Warden', name: 'fullName', required: true, icon: faUser },
    { ...email },
    {
        label: 'Who are you',
        type: 'select',
        placeholder: 'Select ...',
        name: 'role',
        required: true,
        icon: faIdCard,
        options: UserTypeLoadOptions,
    },
    { label: 'Password', type: 'password', placeholder: '******', name: 'password', required: true, icon: faLock },
    { label: 'Confirm Password', type: 'password', placeholder: '******', name: 'comfirm', required: true, icon: faLock },
];

const resetInputs = [{ ...email }];

//  APPLY
const applyInputs = [
    { label: 'Website/Portfolio Link', type: 'text', placeholder: 'https://www.asher.me', name: 'link', required: false, icon: faUser },
    { label: 'Upload Cv', type: 'file', placeholder: 'asher-cv.pdf', name: 'cv' },
    { label: 'Upload Motivation', type: 'file', placeholder: 'asher-motivation.pdf', name: 'motivation', icon: faUser },
];
// ADD JOB (JOB POST)
const jobPostInputs = [
    { label: 'Job Title', type: 'text', placeholder: 'Software Engineer', name: 'title', required: true, icon: faBriefcase },
    { label: 'Job Image', type: 'image', placeholder: 'job-image.jpg', name: 'image', icon: faBriefcase },
    { label: 'Location', type: 'text', placeholder: 'New York, NY', name: 'location', icon: faMapLocationDot },
    { label: 'Salary', type: 'text', placeholder: '$70,000', name: 'salary', icon: faMoneyCheckDollar },
    { label: 'Job Description', type: 'editor', placeholder: 'Job description...', name: 'description', icon: faCircleInfo },
    {
        label: 'Job Category',
        type: 'select',
        placeholder: 'Select job category',
        name: 'jobCategory',
        required: true,
        icon: faLayerGroup,
        options: jobCategoryLoadOptions,
    },
    {
        label: 'Job Type',
        type: 'select',
        placeholder: 'Select job type ...',
        name: 'jobType',
        icon: faStopwatch,
        options: jobTypeLoadOptions,
    },
    {
        label: 'Job Status',
        type: 'select',
        placeholder: 'Select job status ...',
        name: 'status',
        icon: faStopwatch,
        options: jobStatusLoadOptions,
    },
];

// ADD WORKER INFO
const workerInputs = [
    { label: 'First Name', type: 'text', placeholder: 'Asher', name: 'firstName', icon: faClipboardUser },
    { label: 'Last Name', type: 'text', placeholder: 'Warden', name: 'lastName', required: true, icon: faClipboardUser },
    { label: 'Title', type: 'text', placeholder: 'Software Engineer', name: 'title', icon: faClipboardUser },
    { label: 'Bio', type: 'textarea', placeholder: 'Tell us about yourself...', name: 'bio', icon: faBookReader },
    { label: 'Upload CV', type: 'file', placeholder: 'asher-cv.pdf', name: 'cv' },
    { label: 'Activity', type: 'text', placeholder: 'Software Development', name: 'activity', icon: faUserGear },
    { label: 'Address', type: 'text', placeholder: '123 Main St, New York, NY', name: 'address', icon: faMapLocationDot },
    { label: 'Telephone', type: 'text', placeholder: '(555) 555-5555', name: 'telephone', icon: faSquarePhone },
];

// ADD EMPLOYEE INFO
const employerInputs = [
    { label: 'Name', type: 'text', placeholder: 'Tech Corp', name: 'name', required: true, icon: faUser },
    { label: 'Company Logo', type: 'image', placeholder: 'company-logo.png', name: 'profile' },
    { label: 'Bio', type: 'textarea', placeholder: 'Company bio...', name: 'bio', icon: faBookReader },
    { label: 'Description', type: 'editor', placeholder: 'Describe your company...', name: 'description', icon: faCircleInfo },
    { label: 'Type', type: 'select', placeholder: 'Industry Type', name: 'type', options: EmployerTypeLoadOptions, icon: faUser },
    { label: 'Activity', type: 'text', placeholder: 'Field of Activity', name: 'activity', icon: faUsersGear },
    { label: 'Address', type: 'text', placeholder: '123 Corporate St, New York, NY', name: 'address', icon: faMapLocationDot },
    { label: 'Telephone', type: 'text', placeholder: '(555) 555-5555', name: 'telephone', icon: faSquarePhone },
];

export { loginInputs, registerInputs, resetInputs, applyInputs, jobPostInputs, workerInputs, employerInputs };
