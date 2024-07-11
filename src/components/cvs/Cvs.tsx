// /src/pages/JobPage.tsx
import React, { useState } from 'react';
import { Title, Pagination, SearchForm } from '../Common';
import CvCard from './CvCard';
import { cvs } from './data';

const ITEMS_PER_PAGE = 9;

const Cvs: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const paginatedJobs = cvs.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <div className='w-content row items-center gap-y-8'>
            <Title subtitle='Features jobs' className='col-12'>
                Resume Listings
            </Title>
            <SearchForm />
            {paginatedJobs.map((cv) => (
                <CvCard key={cv.id} name={cv.name} description={cv.description} />
            ))}
            <Pagination currentPage={currentPage} totalPages={Math.ceil(cvs.length / ITEMS_PER_PAGE)} onPageChange={handlePageChange} />
        </div>
    );
};

export default Cvs;
