import React from 'react';
import jobImage from '../../../assets/images/about-2.jpg';
import Emplogo from '../../../assets/images/employer-logo.png';

interface JobImageProps {
    image?: string;
    logo?: string;
}

const JobImage: React.FC<JobImageProps> = ({ image, logo }) => {
    return (
        <div className='relative w-full md:flex-1 flex flex-col h-72 p-4 rounded-md overflow-hidden bg-gray-200'>
            <img src={image ? image : jobImage} alt='Job Image' className='absolute z-0 top-0 left-0 w-full h-full object-cover' loading='lazy' />
            <div className='w-12 h-12 relative overflow-hidden z-2 border border-primary rounded-lg'>
                <img src={logo ? logo : Emplogo} alt='Company Logo' className='w-full h-full object-cover' loading='lazy' />
            </div>
        </div>
    );
};

export default JobImage;
