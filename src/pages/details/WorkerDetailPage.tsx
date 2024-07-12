import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import WorkerDetail from '../../components/detail/worker/WorkerDetail';
import { exampleWorker } from '../../components/detail/data';

const WorkerDetailPage: React.FC = () => {
    const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Cvs', href: '/cvs' }, { label: 'Detail' }];
    return (
        <div>
            <PageBanner title={exampleWorker.fullName} breadcrumbs={breadcrumbs} />
            <div className='flex flex-col my-5 justify-center items-center'>
                <WorkerDetail worker={exampleWorker} />
            </div>
        </div>
    );
};

export default WorkerDetailPage;
