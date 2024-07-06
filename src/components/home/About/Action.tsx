import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';

const Action: React.FC = () => {
    return (
        <div className='flex items-center mt-auto flex-wrap gap-4'>
            <button className='page-btn'>
                Read More
                <span className='ml-2'>→</span>
            </button>
            <div className='flex items-center'>
                <div className='w-10 h-10 bg-secondary rounded-full mr-2 flex justify-center items-center'>
                    <FontAwesomeIcon icon={faMobileScreen} className='text-white' />
                </div>
                <div>
                    <p className='text-content'>Need help?</p>
                    <p className='text-primary font-bold'>(808) 555-0111</p>
                </div>
            </div>
        </div>
    );
};

export default Action;
