//Icons
import { faEnvelope, faLock, faUser, faIdCard } from '@fortawesome/free-solid-svg-icons';

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

//  ADDJOB INPUTS

//ADDRESUME INPUTS

export { loginInputs, registerInputs, resetInputs };
