import React from 'react';
import { useEffect } from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    return (
        <div className='col-12 flex justify-center items-center space-x-2'>
            {currentPage > 1 && (
                <button onClick={handlePrevClick} className='px-3 py-1 bg-primary text-white rounded'>
                    &lt; Prev
                </button>
            )}
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i + 1}
                    onClick={() => onPageChange(i + 1)}
                    className={`px-3 py-1 ${currentPage === i + 1 ? 'bg-primary text-white' : 'bg-gray-200'} rounded`}
                >
                    {i + 1}
                </button>
            ))}
            {currentPage < totalPages && (
                <button onClick={handleNextClick} className='px-3 py-1 bg-primary text-white rounded'>
                    Next &gt;
                </button>
            )}
        </div>
    );
};

export default Pagination;
