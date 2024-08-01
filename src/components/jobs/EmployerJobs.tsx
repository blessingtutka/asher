import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Job } from '../../interfaces/detail';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Title, Pagination, SearchForm } from '../../components/Common';
import JobItem from '../../components/jobs/JobItem';

const ITEMS_PER_PAGE = 4;

interface EmployerJobProps {
    jobs: Job[];
}

const EmployerJobs: React.FC<EmployerJobProps> = ({ jobs }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const paginatedJobs = jobs.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <div className='w-content row px-0 items-center justify-center gap-y-2'>
            <Title subtitle='Features jobs' className='col-12 '>
                My Posted Jobs
            </Title>
            <div className='flex flex-col md:flex-row justify-center md:justify-between mb-5'>
                <Link to={'/job/post'} className='links self-start links bg-slate-300 rounded-md p-2'>
                    <FontAwesomeIcon icon={faAdd} className='mr-1' /> Post a job
                </Link>
                <SearchForm />
            </div>
            <div className='w-full row px-0 gap-y-2'>
                {paginatedJobs.map((job) => (
                    <JobItem key={job.id} job={job} />
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={Math.ceil(jobs.length / ITEMS_PER_PAGE)} onPageChange={handlePageChange} />
        </div>
    );
};

export default EmployerJobs;
