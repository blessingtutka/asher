import React, { useState, useEffect } from 'react';
import { getAllWorkers, searchWorkers } from '../../services/worker.service';
import { Worker, ApiResponse } from '../../interfaces/detail';
import { Title, Pagination, WorkerSearchForm, Loading, Error, Empty } from '../Common';
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

    const handleSearch = async (name: string, category: string) => {
        try {
            setLoading(true);
            const response = await searchWorkers(name, category);
            setWorkers(response.data);
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

    const paginatedWorkers = workers.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <div className='w-content row items-center gap-y-8'>
            <Title subtitle='Featured Talents' className='col-12'>
                Resume Listings
            </Title>
            <WorkerSearchForm onSearch={handleSearch} />
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
