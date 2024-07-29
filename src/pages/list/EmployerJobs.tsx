// /src/pages/JobPage.tsx
import React, { useState } from 'react';
import { Title, Pagination, SearchForm } from '../../components/Common';
import JobItem from '../../components/jobs/JobItem';
import { jobs } from '../../components/jobs/data';
const ITEMS_PER_PAGE = 4;

const Jobs: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const paginatedJobs = jobs.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <div className='w-content row items-center justify-center gap-y-2'>
            <Title subtitle='Features jobs' className='col-12 '>
                My Posted Jobs
            </Title>
            <SearchForm />
            {paginatedJobs.map((job) => (
                <JobItem key={job.id} title={job.title} description={job.description} salary={job.salary} />
            ))}
            <Pagination currentPage={currentPage} totalPages={Math.ceil(jobs.length / ITEMS_PER_PAGE)} onPageChange={handlePageChange} />
        </div>
    );
};

export default Jobs;
