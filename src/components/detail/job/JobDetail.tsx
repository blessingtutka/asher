import React from 'react';
import { Job } from '../../../interfaces/detail';
import { formatDate } from '../../../utils/dateFormater';
import { formatString } from '../../../utils/stringFormater';
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
                <JobImage job={job} />
                <JobContact job={job} />
            </div>
            <h1 className='text-3xl font-bold text-primary mb-4'>{job.title}</h1>
            {job.description && <div className='editors' dangerouslySetInnerHTML={{ __html: job.description }} />}
            <div className='grid grid-cols-2 my-4 gap-4'>
                <JobInfoItem label='Company' value={job.employer?.name ? job.employer?.name : 'N/A'} link={`/employer/${job.employer?.id}`} />
                <JobInfoItem label='Location' value={job.location ? job.location : 'N/A'} />
                <JobInfoItem label='Salary' value={job.salary ? `$${job.salary}` : 'N/A'} />
                <JobInfoItem label='Date Post' value={job.createdAt ? formatDate(job.createdAt) : 'N/A'} />
                <JobInfoItem label='Job Type' value={job.jobType ? formatString(job.jobType) : 'N/A'} />
                <JobInfoItem label='Status' value={job.status ? job.status : 'N/A'} />
            </div>
        </div>
    );
};

export default JobDetail;
