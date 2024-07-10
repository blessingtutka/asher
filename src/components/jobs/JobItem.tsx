import React from 'react';

import JobImage from '../../assets/images/about-2.jpg';
import logo from '../../assets/images/employer-logo.png';
type JobItemProps = {
    title: string;
    description: string;
    salary: number;
    image?: string;
    logo?: string;
};

const JobItem: React.FC<JobItemProps> = ({ title, description, salary }) => {
    return (
        <div className='col-12 md:col-6'>
            <div className='w-full m-4 border border-gray-300 rounded-lg overflow-hidden flex flex-col justify-between'>
                <div className='relative w-full flex flex-col h-52 p-4 bg-gray-200'>
                    <img src={JobImage} alt='about-2' className='absolute z-0 top-0 left-0 w-full h-full object-cover' />
                    <div className='w-12 h-12 relative overflow-hidden z-2 border border-primary rounded-lg'>
                        <img src={logo} alt='log' className='w-full h-full object-cover' />
                    </div>
                    <div className='w-full relative z-2 mt-auto pb-4'>
                        <h3 className='text-center text-white font-bold text-xl'>Campany Name</h3>
                    </div>
                </div>
                <div className='p-4'>
                    <h2 className='text-lg mb-2'>{title}</h2>
                    <p className='text-gray-500 text-sm'>{description}</p>
                </div>
                <div className='flex justify-between items-center p-4'>
                    <div className='text-lg text-primary'>${salary.toFixed(2)}</div>
                    <button className='p-2 bg-primary text-white rounded'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobItem;
