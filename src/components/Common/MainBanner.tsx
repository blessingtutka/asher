import React from 'react';
import mainBannerImage from '../../assets/images/main-banner.jpg';
import { DottedImage1, DottedImage2 } from '../../assets/images/icons';

const MainBanner: React.FC = () => {
    return (
        <div className='relative bg-gray-800 text-white py-16 px-4 overflow-hidden'>
            <div className='absolute'>
                <DottedImage1 className='absolute top-5 left-5' /> <DottedImage2 className='absolute top-5 right-5' />
            </div>

            <div className='container mx-auto flex  flex-col items-center md:flex-row md:items-center'>
                <div className='flex-[3]'>
                    <h1 className='text-5xl font-bold'>Popular Job Portal</h1>
                    <p className='text-2xl mt-4 hidden md:block'>Find Opportunities to Work with World Lead Companies</p>
                </div>
                <div className='relative h-72 overflow-hidden rounded-lg flex-[2] mt-8 md:mt-0'>
                    <img
                        src={mainBannerImage}
                        alt='Job Image'
                        className='imgBorder absolute z-0 top-0 left-0 w-full h-full object-cover'
                        loading='lazy'
                    />
                </div>
            </div>
        </div>
    );
};

export default MainBanner;
