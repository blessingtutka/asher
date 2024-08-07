import React, { useState, useEffect } from 'react';
import { getAllWorkers } from '../../services/worker.service';
import { Title, Pagination, SearchForm } from '../Common';
import { Worker, ApiResponse } from '../../interfaces/detail';
import Loading from '../Common/Loading';
import Error from '../Common/Error';
import Empty from '../Common/Empty';
import CvCard from './CvCard';

const ITEMS_PER_PAGE = 9;

const Cvs: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [workers, setWorkers] = useState<Worker[]>([]);

    useEffect(() => {
        const fetchAllWorkers = async () => {
            setLoading(true);
            setError(null);
            try {
                const response: ApiResponse<Worker[]> = await getAllWorkers();
                setWorkers(response.data);
            } catch (err) {
                setError('Error fetching workers');
            } finally {
                setLoading(false);
            }
        };
        fetchAllWorkers();
    }, []);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const paginatedWorkers = workers.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <div className='w-content row items-center gap-y-8'>
            <Title subtitle='Featured Talents' className='col-12'>
                Resume Listings
            </Title>
            <SearchForm />
            {loading ? (
                <Loading className='!h-16' />
            ) : error ? (
                <Error message={error} />
            ) : workers.length === 0 ? (
                <Empty message='No resumes available' />
            ) : (
                paginatedWorkers.map((worker) => <CvCard key={worker.id} worker={worker} />)
            )}
            <Pagination currentPage={currentPage} totalPages={Math.ceil(workers.length / ITEMS_PER_PAGE)} onPageChange={handlePageChange} />
        </div>
    );
};

export default Cvs;
