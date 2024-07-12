import React from 'react';

interface WorkerExperienceProps {
    personalExperience?: string;
}

const WorkerExperience: React.FC<WorkerExperienceProps> = ({ personalExperience }) => {
    return (
        <div className='mt-5'>
            <h2 className='text-2xl font-bold text-primary mb-2'>Personal Experience</h2>
            <p className='mb-4'>{personalExperience}</p>
        </div>
    );
};

export default WorkerExperience;
