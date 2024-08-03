import React from 'react';
import WorkerInfo from './WorkerInfo';
import { Worker } from '../../../interfaces/detail';

interface WorkerDetailProps {
    worker: Worker;
}

const WorkerDetail: React.FC<WorkerDetailProps> = ({ worker }) => {
    return (
        <div className='detail worker-detail w-full text-content'>
            <WorkerInfo worker={worker} />
            {/* <WorkerSkill skills={worker.skills} /> */}
        </div>
    );
};

export default WorkerDetail;
