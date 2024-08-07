import React from 'react';
import { useApp } from '../../../context/ApplicationContext';
import { CallToAction, ActionBack } from '../../../assets/images/icons';
const ReadyToStart: React.FC = () => {
    const { setModalOpen } = useApp();

    const handleClick = () => {
        setModalOpen(true);
    };

    return (
        <div className='w-full bg-primary overflow-hidden text-white my-4 p-8 flex flex-col md:flex-row justify-around items-center'>
            <div className='flex flex-col gap-4  overflow-hidden'>
                <div className='relative'>
                    <ActionBack className='absolute top-0 left-0 h-[inherit] -z-1' height={'250px'} />
                    <h1 className='relative z-2 text-4xl mb-4 font-bold'>Are you ready to start?</h1>
                    <p className='relative z-2 text-lg font-thin'>
                        Create a comprehensive profile highlighting your skills, experiences, and career goals.
                    </p>
                </div>
                <button
                    onClick={handleClick}
                    className='relative z-2 w-fit bg-white text-primary hover:bg-primary hover:text-white hover:border border-solid border-white font-semibold py-2 px-4 rounded-full'
                >
                    Add your resume
                </button>
            </div>

            <div className='ml-8'>
                <CallToAction />
            </div>
        </div>
    );
};

export default ReadyToStart;
