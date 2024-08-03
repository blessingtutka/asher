import React from 'react';
import { Link } from 'react-router-dom';
import { Worker } from '../../../interfaces/detail';

interface WorkerInfoProps {
    worker: Worker;
}

const WorkerInfo: React.FC<WorkerInfoProps> = ({ worker }) => {
    return (
        <div className='flex flex-col md:flex-row gap-8'>
            <div className='relative bg-gray-200 rounded-md h-64 w-64 mb-6 overflow-hidden'>
                {worker.profile && <img src={worker.profile} alt='worker' className='absolute z-0 top-0 left-0 w-full h-full object-cover' />}
            </div>
            <div className='info flex-1'>
                <h1 className='text-3xl font-bold text-primary mb-2'>{`${worker.lastName || 'Last and '} ${worker.firstName || 'First name'}`}</h1>
                <div className='w-fit subtitle flex items-center'>
                    <div className='w-8 h-1 bg-primary mr-2 rounded-sm'></div>
                    <h2 className='text-gray-600'>{worker.title}</h2>
                </div>

                <p className='mb-4'>{worker.bio}</p>
                <div className='mb-4'>
                    {worker.activity && (
                        <div className='flex'>
                            <b className='text-black w-32 mr-4'>Responsibility:</b>
                            <span>{worker.activity}</span>
                        </div>
                    )}
                    {worker.cvFile && (
                        <div className='flex'>
                            <b className='text-black w-32 mr-4'>Experience:</b>
                            <Link to={worker.cvFile} target='_blank' rel='noopener noreferrer'>
                                Check My Resume
                            </Link>
                        </div>
                    )}
                    <div className='flex'>
                        <b className='text-black w-32 mr-4'>Email:</b>
                        <span>{worker.user?.email || 'N/A'}</span>
                    </div>
                    <div className='flex'>
                        <b className='text-black w-32 mr-4'>Phone:</b>
                        <span>{worker.telephone || 'N/A'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkerInfo;
