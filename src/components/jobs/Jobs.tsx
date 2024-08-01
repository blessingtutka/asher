import React, { useState } from 'react';
import { Title, Pagination, SearchForm } from '../Common';
import JobItem from './JobItem';
import { Job } from '../../interfaces/detail';
const ITEMS_PER_PAGE = 4;

const Jobs: React.FC<{ jobs: Job[] }> = ({ jobs }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const paginatedJobs = jobs.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <div className='w-content row items-center justify-center gap-y-2'>
            <Title subtitle='Features jobs' className='col-12 '>
                Job Listings
            </Title>
            <div className='flex w-full justify-end mb-5'>
                <SearchForm />
            </div>
            <div className='w-full row  gap-y-2'>
                {paginatedJobs.map((job) => (
                    <JobItem key={job.id} job={job} />
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={Math.ceil(jobs.length / ITEMS_PER_PAGE)} onPageChange={handlePageChange} />
        </div>
    );
};

export default Jobs;
