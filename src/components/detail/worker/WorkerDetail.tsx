import React from 'react';
import WorkerSkill from './WorkerSkills';
import WorkerInfo from './WorkerInfo';
import WorkerExperience from './WorkerExperience';
import { Worker } from '../../../interfaces/detail';

interface WorkerDetailProps {
    worker: Worker;
}

const WorkerDetail: React.FC<WorkerDetailProps> = ({ worker }) => {
    return (
        <div className='detail worker-detail w-content text-content'>
            <WorkerInfo worker={worker} />
            {worker.personalExperience && <WorkerExperience personalExperience={worker.personalExperience} />}
            <WorkerSkill skills={worker.skills} />
        </div>
    );
};

export default WorkerDetail;
