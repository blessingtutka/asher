import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../../context/UserContext';
import { Job } from '../../../interfaces/detail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import jobImage from '../../../assets/images/about-2.jpg';
import Emplogo from '../../../assets/images/employer-logo.png';
import { joinUrl } from '../../../utils/pathJoin';

interface JobImageProps {
    job: Job;
}

const JobImage: React.FC<JobImageProps> = ({ job }) => {
    const { getUser } = useUser();
    const user = getUser();

    const isUserEmployer = job.employer?.userId === user?.id;
    return (
        <div className='relative w-full md:flex-1 flex flex-col h-72 p-4 rounded-md overflow-hidden bg-gray-200'>
            {isUserEmployer && (
                <Link to={`/job/update/${job.id}`} className='actions bg-slate-300 rounded-md p-1 absolute z-10 top-2 right-2 text-xs'>
                    <FontAwesomeIcon icon={faPenToSquare} className='mr-1' /> <span className='text'>Edit</span>
                </Link>
            )}
            <img
                src={job.image ? job.image : jobImage}
                alt='Job Image'
                className='absolute z-0 top-0 left-0 w-full h-full object-cover'
                loading='lazy'
            />
            <div className='w-12 h-12 relative overflow-hidden z-2 border border-primary rounded-lg'>
                <img
                    src={job.employer?.profile ? joinUrl(import.meta.env.VITE_UPLOAD_BASE_URL, job.employer.profile) : Emplogo}
                    alt='Company Logo'
                    className='w-full h-full object-cover'
                    loading='lazy'
                />
            </div>
        </div>
    );
};

export default JobImage;
