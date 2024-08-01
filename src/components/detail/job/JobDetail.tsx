import React from 'react';
import { Job } from '../../../interfaces/detail';
import { formatDate } from '../../../utils/dateFormater';
import JobImage from './JobImage';
import JobContact from './JobContact';
import JobInfoItem from './JobInfoItem';

interface JobDetailProps {
    job: Job;
}

const JobDetail: React.FC<JobDetailProps> = ({ job }) => {
    return (
        <div className='detail job-detail w-content text-content'>
            <div className='flex flex-col mb-5 md:flex-row md:justify-between gap-6'>
                <JobImage image={job.image} logo={job.employer?.profile} />
                <JobContact job={job} />
            </div>
            <h1 className='text-3xl font-bold text-primary mb-4'>{job.title}</h1>
            <p className='mb-4'>{job.description}</p>
            <div className='grid grid-cols-2 gap-4'>
                <JobInfoItem label='Company' value={job.employer?.name} />
                <JobInfoItem label='Location' value={job.location} />
                <JobInfoItem label='Salary' value={job.salary} />
                <JobInfoItem label='Date Post' value={job.createdAt ? formatDate(job.createdAt) : 'N/A'} />
            </div>
        </div>
    );
};

export default JobDetail;
