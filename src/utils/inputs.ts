//Icons
import {
    faEnvelope,
    faLock,
    faUser,
    faIdCard,
    faBriefcase,
    faBuilding,
    faMapLocationDot,
    faStopwatch,
    faMoneyCheckDollar,
    faCircleInfo,
    faListCheck,
    faHourglassStart,
    faHourglassHalf,
    faBookReader,
    faUserGear,
    faSquarePhone,
    faClipboardUser,
    faUsersGear,
    faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';
import jobCategory from './jobCategory';

const jobTypeLoadOptions = async (inputValue: string) => {
    try {
        const jobTypeOptions = [
            { value: 'Full Time', label: 'Full Time', icon: faHourglassStart },
            { value: 'Part Time', label: 'Part Time', icon: faHourglassHalf },
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

// AUTH  IMPUTS
const email = { label: 'Email', type: 'email', placeholder: 'asher@gmail.com', name: 'email', required: true, icon: faEnvelope };
const password = { label: 'Password', type: 'password', placeholder: '******', name: 'password', required: true, icon: faLock };

const loginInputs = [{ ...email }, { ...password }];
const registerInputs = [
    { label: 'Full Name', type: 'text', placeholder: 'Asher Warden', name: 'fullname', required: true, icon: faUser },
    { ...email },
    { label: 'Who are you', type: 'select', placeholder: 'Select ...', name: 'whoareyou', required: true, icon: faIdCard },
    { label: 'Password', type: 'password', placeholder: '******', name: 'password', required: true, icon: faLock },
    { label: 'Confirm Password', type: 'password', placeholder: '******', name: 'comfirm', required: true, icon: faLock },
];

const resetInputs = [{ ...email }];

//  APPLY
const applyInputs = [
    { label: 'Full Name', type: 'text', placeholder: 'Asher Warden', name: 'fullname', required: true, icon: faUser },
    { ...email },
    { label: 'Website/Portfolio Link', type: 'text', placeholder: 'https://www.asher.me', name: 'link', required: false, icon: faUser },
    { label: 'Upload Cv', type: 'file', placeholder: 'asher-cv.pdf', name: 'cv', required: true },
    { label: 'Upload Motivation', type: 'file', placeholder: 'asher-motivation.pdf', name: 'motivation', required: true, icon: faUser },
];
// ADD JOB (JOB POST)
const jobPostInputs = [
    { label: 'Job Title', type: 'text', placeholder: 'Software Engineer', name: 'jobTitle', required: true, icon: faBriefcase },
    { label: 'Company Name', type: 'text', placeholder: 'Tech Corp', name: 'companyName', required: true, icon: faBuilding },
    { label: 'Location', type: 'text', placeholder: 'New York, NY', name: 'location', required: true, icon: faMapLocationDot },
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
        required: true,
        icon: faStopwatch,
        options: jobTypeLoadOptions,
    },
    { label: 'Salary', type: 'text', placeholder: '$70,000', name: 'salary', required: true, icon: faMoneyCheckDollar },
    { label: 'Job Description', type: 'textarea', placeholder: 'Job description...', name: 'jobDescription', required: true, icon: faCircleInfo },
    { label: 'Requirements', type: 'textarea', placeholder: 'Requirements...', name: 'requirements', required: true, icon: faListCheck },
];

// ADD WORKER INFO
const workerInputs = [
    { label: 'First Name', type: 'text', placeholder: 'Asher', name: 'firstname', required: true, icon: faClipboardUser },
    { label: 'Last Name', type: 'text', placeholder: 'Warden', name: 'lastname', required: true, icon: faClipboardUser },
    { label: 'Bio', type: 'textarea', placeholder: 'Tell us about yourself...', name: 'bio', icon: faBookReader },
    { label: 'Upload CV', type: 'file', placeholder: 'asher-cv.pdf', name: 'cv', required: true },
    { label: 'Activity', type: 'text', placeholder: 'Software Development', name: 'activity', required: true, icon: faUserGear },
    { label: 'Address', type: 'text', placeholder: '123 Main St, New York, NY', name: 'address', required: true, icon: faMapLocationDot },
    { label: 'Telephone', type: 'text', placeholder: '(555) 555-5555', name: 'telephone', required: true, icon: faSquarePhone },
];

// ADD EMPLOYEE INFO
const employerInputs = [
    { label: 'Name', type: 'text', placeholder: 'Tech Corp', name: 'name', required: true, icon: faUser },
    { label: 'Company Logo', type: 'file', placeholder: 'company-logo.png', name: 'log', required: true },
    { label: 'Description', type: 'textarea', placeholder: 'Describe your company...', name: 'description', required: true, icon: faCircleInfo },
    { label: 'Type', type: 'text', placeholder: 'Industry Type', name: 'type', required: true, icon: faUser },
    { label: 'Bio', type: 'textarea', placeholder: 'Company bio...', name: 'bio', icon: faBookReader },
    { label: 'Activity', type: 'text', placeholder: 'Field of Activity', name: 'activity', required: true, icon: faUsersGear },
    { label: 'Address', type: 'text', placeholder: '123 Corporate St, New York, NY', name: 'address', required: true, icon: faMapLocationDot },
    { label: 'Telephone', type: 'text', placeholder: '(555) 555-5555', name: 'telephone', required: true, icon: faSquarePhone },
];

export { loginInputs, registerInputs, resetInputs, applyInputs, jobPostInputs, workerInputs, employerInputs };
