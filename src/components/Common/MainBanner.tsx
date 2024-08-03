import React from 'react';
// import { MainBannerImage } from '../../assets/images/icons';
import { ContactIcon } from '../../assets/images/icons';

const MainBanner: React.FC = () => {
    return (
        <div className='main-banner relative bg-gray-800 text-white py-16 px-4 overflow-hidden'>
            <div className='container mx-auto flex flex-col items-center md:flex-row md:items-center'>
                <div className='flex-[3]'>
                    <h1 className='text-5xl font-bold'>Popular Job Portal</h1>
                    <p className='text-2xl mt-4 hidden md:block'>Find Opportunities to Work with World Lead Companies</p>
                </div>
                <div className='relative h-72 overflow-hidden rounded-lg flex-[2] mt-8 md:mt-0'>
                    <ContactIcon className='absolute z-0 top-0 left-0 w-full h-full object-cover' />
                </div>
            </div>
        </div>
    );
};

export default MainBanner;
