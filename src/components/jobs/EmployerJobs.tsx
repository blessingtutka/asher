import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Job } from '../../interfaces/detail';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Title, Pagination, SearchForm } from '../../components/Common';
import { getAllJobs, searchJobs } from '../../services/job.service';
import JobItem from './JobItem';
import Loading from '../../components/Common/Loading';
import Error from '../../components/Common/Error';
import Empty from '../../components/Common/Empty';

const ITEMS_PER_PAGE = 4;

const EmployerJobs: React.FC = () => {
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

    const handleSearch = async (name: string, category: string) => {
        try {
            setLoading(true);
            const response = await searchJobs(name, category);
            setJobs(response.data);
            setError(null);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

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
                <SearchForm onSearch={handleSearch} />
            </div>
            {loading ? (
                <Loading className='!h-16' />
            ) : error ? (
                <Error message={error} />
            ) : jobs.length === 0 ? (
                <Empty message='You have no posted job' />
            ) : (
                <div className='w-full row px-0 gap-y-2'>
                    {paginatedJobs.map((job) => (
                        <JobItem key={job.id} job={job} />
                    ))}
                </div>
            )}

            <Pagination currentPage={currentPage} totalPages={Math.ceil(jobs.length / ITEMS_PER_PAGE)} onPageChange={handlePageChange} />
        </div>
    );
};

export default EmployerJobs;
