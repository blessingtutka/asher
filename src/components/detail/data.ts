import { Job, Worker } from '../../interfaces/detail';
import workerImage from '../../assets/images/about-1.jpg';
import jobImage from '../../assets/images/about-1.jpg';
import logo from '../../assets/images/employer-logo.png';
export const exampleJob: Job = {
    image: jobImage,
    logo: logo,
    title: 'Software Engineer',
    description: `IELTS score is internationally recognized as an English Language proficiency requirement 
    for higher education, in almost all countries including the USA, the United Kingdom, Australia, Canada, 
    and New Zealand. The highest IELT Academic module test assesses whether you have adequate  possible band score is 9.0; 
    most universities accept a score of 6.0 for undergraduate admission and 6.0-7.0 for graduate admission. 
    There are two versions of the `,
    location: 'San Francisco, CA',
    salary: '$120,000 - $140,000',
    experience: '3+ years',
    company: 'Tech Corp',
    phone: '+(1) 997 567 345',
};

export const exampleWorker: Worker = {
    image: workerImage,
    fullName: 'John Doe',
    title: 'Senior Developer',
    description: `Eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra.
        Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere`,
    responsibility: 'System Design',
    experience: '10 years +',
    email: 'john.doe@example.com',
    phone: '(907) 555-0101',
    personalExperience: 'IELTS score is internationally recognized...',
    skills: [
        { name: 'Developing Process', percentage: 70 },
        { name: 'Power Design', percentage: 60 },
        { name: 'Comfort Functionality', percentage: 50 },
    ],
};
