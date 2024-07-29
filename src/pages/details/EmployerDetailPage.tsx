import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import EmployerDetail from '../../components/detail/employer/EmployerDetail';
import { exampleEmployer } from '../../components/detail/data';

const EmployerDetailPage: React.FC = () => {
    const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Jobs', href: '/jobs' }, { label: 'Employer' }, { label: 'Detail' }];
    return (
        <div>
            <PageBanner title={exampleEmployer.name || 'Employer'} breadcrumbs={breadcrumbs} />
            <div className='flex flex-col my-5 justify-center items-center'>
                <EmployerDetail employer={exampleEmployer} className='!w-content' />
            </div>
        </div>
    );
};

export default EmployerDetailPage;
