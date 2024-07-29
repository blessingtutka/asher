import React from 'react';
import { Employer } from '../../../interfaces/detail';

interface EmployerInfoProps {
    employer: Employer;
}

const EmployerInfo: React.FC<EmployerInfoProps> = ({ employer }) => {
    return (
        <div className='flex flex-col md:flex-row gap-8'>
            <div className='relative bg-gray-200 rounded-md h-64 w-64 mb-6 overflow-hidden'>
                {employer.profile && <img src={employer.profile} alt='employer' className='absolute z-0 top-0 left-0 w-full h-full object-cover' />}
            </div>
            <div className='info flex-1'>
                <h1 className='text-3xl font-bold text-primary mb-2'>{employer.name}</h1>
                <div className='w-fit subtitle flex items-center'>
                    <div className='w-8 h-1 bg-primary mr-2 rounded-sm'></div>
                    <h2 className='text-gray-600'>{employer.activity}</h2>
                </div>

                <p className='mb-4'>{employer.bio}</p>
                <div className='mb-4'>
                    {employer.type && (
                        <div className='flex'>
                            <b className='text-black w-32 mr-4'>Type:</b>
                            <span>{employer.type}</span>
                        </div>
                    )}
                    {employer.address && (
                        <div className='flex'>
                            <b className='text-black w-32 mr-4'>Address:</b>
                            <span>{employer.address}</span>
                        </div>
                    )}
                    <div className='flex'>
                        <b className='text-black w-32 mr-4'>Email:</b>
                        <span>{employer?.user?.email || 'N/A'}</span>
                    </div>
                    {employer.telephone && (
                        <div className='flex'>
                            <b className='text-black w-32 mr-4'>Phone:</b>
                            <span>{employer.telephone}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EmployerInfo;
