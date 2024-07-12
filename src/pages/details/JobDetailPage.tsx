import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import JobDetail from '../../components/detail/job/JobDetail';
import { exampleJob } from '../../components/detail/data';

const JobDetailPage: React.FC = () => {
    const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Jobs', href: '/jobs' }, { label: 'Detail' }];
    return (
        <div>
            <PageBanner title={exampleJob.title} breadcrumbs={breadcrumbs} />
            <div className='flex flex-col my-5 justify-center items-center'>
                <JobDetail job={exampleJob} />
            </div>
        </div>
    );
};

export default JobDetailPage;
