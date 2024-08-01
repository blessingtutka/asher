import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Job } from '../../../interfaces/detail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const JobContact: React.FC<{ job: Job }> = ({ job }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/apply/${job.title}/${job.id}`);
    };
    return (
        <div className='touch w-60 h-full'>
            <div className='w-full rounded-md bg-gray-200 flex flex-col gap-y-4 p-4 items-center'>
                <div className='w-14 h-14 bg-secondary rounded-full mr-2 flex justify-center items-center'>
                    <FontAwesomeIcon icon={faPhone} className='text-white' />
                </div>
                <div className='text-primary font-semibold text-center'>
                    <p>GET IN TOUCH</p>
                    <p>{job?.employer?.telephone}</p>
                </div>
            </div>
            <div>
                <button className='apply-btn' onClick={handleClick}>
                    Apply Now &rarr;
                </button>
            </div>
        </div>
    );
};

export default JobContact;
