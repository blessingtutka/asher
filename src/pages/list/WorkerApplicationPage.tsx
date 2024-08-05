import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import WorkerApplicationList from '../../components/applications/WorkerApplicationList';

const WorkerApplicationPage: React.FC = () => {
    const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'apllications' }];

    return (
        <div className='flex flex-col justify-center items-center'>
            <PageBanner title={'Your Applications'} breadcrumbs={breadcrumbs} />
            <div className='w-content flex flex-col min-h-40 my-5 justify-center items-center'>
                <WorkerApplicationList />
            </div>
        </div>
    );
};

export default WorkerApplicationPage;
