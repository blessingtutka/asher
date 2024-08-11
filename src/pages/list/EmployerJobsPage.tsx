import React from 'react';
import { PageBanner } from '../../components/Common';
import EmployerJobs from '../../components/jobs/EmployerJobs';

const EmployerJobsPage: React.FC = () => {
    const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Jobs' }];

    return (
        <div className='flex flex-col *:w-full justify-center items-center'>
            <PageBanner title={'Your Posted Job'} breadcrumbs={breadcrumbs} />
            <div className='!w-content flex flex-col min-h-40 my-5 justify-center items-center'>
                <EmployerJobs />
            </div>
        </div>
    );
};

export default EmployerJobsPage;
