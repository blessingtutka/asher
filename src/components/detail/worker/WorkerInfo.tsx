import React from 'react';
import { Worker } from '../../../interfaces/detail';

interface WorkerInfoProps {
    worker: Worker;
}

const WorkerInfo: React.FC<WorkerInfoProps> = ({ worker }) => {
    return (
        <div className='flex flex-col md:flex-row gap-8'>
            <div className='relative bg-gray-200 rounded-md h-64 w-64 mb-6 overflow-hidden'>
                {worker.image && <img src={worker.image} alt='worker' className='absolute z-0 top-0 left-0 w-full h-full object-cover' />}
            </div>
            <div className='info flex-1'>
                <h1 className='text-3xl font-bold text-primary mb-2'>{worker.fullName}</h1>
                <div className='w-fit subtitle flex items-center'>
                    <div className='w-8 h-1 bg-primary mr-2 rounded-sm'></div>
                    <h2 className='text-gray-600'>{worker.title}</h2>
                </div>

                <p className='mb-4'>{worker.description}</p>
                <div className='mb-4'>
                    {worker.responsibility && (
                        <div className='flex'>
                            <b className='text-black w-32 mr-4'>Responsibility:</b>
                            <span>{worker.responsibility}</span>
                        </div>
                    )}
                    {worker.experience && (
                        <div className='flex'>
                            <b className='text-black w-32 mr-4'>Experience:</b>
                            <span>{worker.experience}</span>
                        </div>
                    )}
                    <div className='flex'>
                        <b className='text-black w-32 mr-4'>Email:</b>
                        <span>{worker.email}</span>
                    </div>
                    <div className='flex'>
                        <b className='text-black w-32 mr-4'>Phone:</b>
                        <span>{worker.phone}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkerInfo;
