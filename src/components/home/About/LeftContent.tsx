import React from 'react';
import about1 from '../../../assets/images/about-1.jpg';
import about2 from '../../../assets/images/about-2.jpg';
const Left: React.FC = () => {
    return (
        <div className='flex w-full h-full md:w-1/2 mlg:w-2/5 justify-center items-start gap-3'>
            <div className='w-1/2 bg-gray-300 rounded-lg h-80 border-1 border-secondary overflow-hidden'>
                <img src={about1} alt='about-1' className='w-full h-full object-cover' />
            </div>
            <div className='w-1/2 flex flex-col gap-y-3'>
                <div className='bg-primary text-white flex flex-col justify-center items-center rounded-lg h-20 w-full'>
                    <span className='text-3xl font-bold'>+20</span>
                    <span>Posted Job</span>
                </div>
                <div className='w-full bg-gray-300 rounded-lg h-80 overflow-hidden'>
                    <img src={about2} alt='about-2' className='w-full h-full object-cover' />
                </div>
            </div>
        </div>
    );
};

export default Left;
