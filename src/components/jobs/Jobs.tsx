import React, { useState, useEffect } from 'react';
import { Title, Pagination, SearchForm } from '../Common';
import { Job } from '../../interfaces/detail';
import { getAllJobs } from '../../services/job.service';
import JobItem from './JobItem';
import Loading from '../../components/Common/Loading';
import Error from '../../components/Common/Error';
import Empty from '../../components/Common/Empty';
const ITEMS_PER_PAGE = 4;

const Jobs: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEmployerJobs = async () => {
            try {
                const response = await getAllJobs();
                setJobs(response.data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployerJobs();
    }, []);

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
            {loading ? (
                <Loading className='!h-16' />
            ) : error ? (
                <Error message={error} />
            ) : jobs.length === 0 ? (
                <Empty message='No posted job yet' />
            ) : (
                <div className='w-full row  gap-y-2'>
                    {paginatedJobs.map((job) => (
                        <JobItem key={job.id} job={job} />
                    ))}
                </div>
            )}

            <Pagination currentPage={currentPage} totalPages={Math.ceil(jobs.length / ITEMS_PER_PAGE)} onPageChange={handlePageChange} />
        </div>
    );
};

export default Jobs;
