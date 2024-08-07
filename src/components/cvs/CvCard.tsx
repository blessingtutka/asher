import React from 'react';
import { Link } from 'react-router-dom';
import { Worker } from '../../interfaces/detail';
import { ArrowL } from '../../assets/images/icons';
import about1 from '../../assets/images/about-1.jpg';
import { joinUrl } from '../../utils/pathJoin';
interface CardProps {
    worker: Worker;
}

const CvCard: React.FC<CardProps> = ({ worker }) => {
    return (
        <div className='col-12 md:col-6 mlg:col-4'>
            <div className='bg-white rounded-lg flex items-stretch'>
                <div className='bg-gray-300 w-2/6 min-h-40 h-full relative overflow-hidden rounded-bl-lg rounded-tl-lg mr-4'>
                    <img
                        src={worker.profile ? joinUrl(import.meta.env.VITE_UPLOAD_BASE_URL, worker.profile) : about1}
                        alt='worker'
                        className='absolute z-0 top-0 left-0 w-full h-full object-cover'
                    />
                </div>
                <div className='pt-6 w-2/3 pr-2 h-full'>
                    <h2 className='text-xl font-semibold mb-2'>{`${worker.lastName || 'Worker'} ${worker.firstName || ''}`}</h2>
                    <p className='text-gray-600 mb-4'>{worker.title || ''}</p>
                    <Link to={`/worker/${worker.id}`} className='text-secondary flex items-center gap-2 mt-auto'>
                        Read More
                        <ArrowL />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CvCard;
