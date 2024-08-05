import { Job, Worker, Employer, Application } from '../../interfaces/detail';
import workerImage from '../../assets/images/about-1.jpg';
import jobImage from '../../assets/images/about-1.jpg';
export const exampleJob: Job = {
    id: 'uidjob',
    image: jobImage,
    title: 'Software Engineer',
    description: `IELTS score is internationally recognized as an English Language proficiency requirement 
    for higher education, in almost all countries including the USA, the United Kingdom, Australia, Canada, 
    and New Zealand. The highest IELT Academic module test assesses whether you have adequate  possible band score is 9.0; 
    most universities accept a score of 6.0 for undergraduate admission and 6.0-7.0 for graduate admission. 
    There are two versions of the `,
    location: 'San Francisco, CA',
    salary: 1200,
};

export const exampleEmployer: Employer = {
    profile: workerImage,
    name: 'Employer Name',
    activity: 'Employer Activity',
    bio: `Employer Bio`,
    description: `Employer Description`,
    type: 'Type',
    telephone: '(907) 555-0101',
    user: { email: 'john.doe@example.com' },
};

export const exampleWorker: Worker = {
    profile: 'https://example.com/worker-profile.jpg',
    firstName: 'Jane',
    lastName: 'Doe',
    bio: 'An experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.',
    title: 'Software Engineer',
    cvFile: 'https://example.com/jane-doe-cv.pdf',
    activity: 'Full-Stack Development',
    address: '5678 Developer Lane, Code City, CA 90002',
    telephone: '+1-987-654-3210',
    user: {
        email: 'jane.doe@example.com',
    },
};

export const applications: Application[] = [
    {
        id: '1',
        jobId: 'job123',
        workerId: 'worker123',
        status: 'PENDING',
        date: new Date().toISOString(),
        link: 'https://example.com/job123',
        // cv: 'https://example.com/resume123.pdf',
        motivation: 'https://example.com/motivation123.pdf',
        job: {
            id: 'job123',
            title: 'Software Engineer',
        },
        worker: {
            id: 'worker123',
            userId: 'user123',
            firstName: 'John',
            lastName: 'Doe',
        },
    },
    {
        id: '2',
        jobId: 'job456',
        workerId: 'worker456',
        status: 'APPROVED',
        date: new Date().toISOString(),
        link: 'https://example.com/job456',
        cv: 'https://example.com/resume456.pdf',
        motivation: 'https://example.com/motivation456.pdf',
        job: {
            id: 'job456',
            title: 'Project Manager',
        },
        worker: {
            id: 'worker456',
            userId: 'user456',
            firstName: 'Jane',
            lastName: 'Smith',
        },
    },
];
