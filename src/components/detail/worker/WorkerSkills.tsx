import React from 'react';
import { Skill } from '../../../interfaces/detail';

interface WorkerSkillProps {
    skills: Skill[];
}

const WorkerSkill: React.FC<WorkerSkillProps> = ({ skills }) => {
    return (
        <div className='mt-6'>
            <h2 className='text-2xl font-bold text-primary mb-2'>Professional Skill</h2>
            <div className='skills w-full md:w-1/2'>
                {skills.map((skill, index) => (
                    <div key={index} className='mb-4'>
                        <div className='flex justify-between'>
                            <span>{skill.name}</span>
                            <span>{skill.percentage}%</span>
                        </div>
                        <div className='w-full bg-gray-200 rounded-full h-2.5 mb-2'>
                            <div className='bg-secondary h-2.5 rounded-full' style={{ width: `${skill.percentage}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkerSkill;
