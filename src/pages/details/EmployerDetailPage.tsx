import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getEmployerProfile } from '../../services/employer.service';
import { Employer } from '../../interfaces/detail';
import { exampleEmployer } from '../../components/detail/data';
import { Loading, Error, PageBanner } from '../../components/Common';
import EmployerDetail from '../../components/detail/employer/EmployerDetail';

const EmployerDetailPage: React.FC = () => {
    const { empId } = useParams();
    const [employer, setEmployer] = useState<Employer | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    if (!empId) {
        return <Error message='Job ID is required' />;
    }

    useEffect(() => {
        const fetchEmployerProfile = async () => {
            try {
                const response = await getEmployerProfile(empId);
                setError('');
                setEmployer(response.data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployerProfile();
    }, []);

    const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Employer' }, { label: 'Detail' }];
    return (
        <div>
            <PageBanner title={employer?.name ? employer?.name : 'Employer'} breadcrumbs={breadcrumbs} />
            {loading && <Loading className='!h-16' />}
            <div className='flex flex-col w-full my-5 gap-4 items-center justify-center'>
                {error && (
                    <div className='flex flex-col w-content my-5 gap-4 items-center justify-center'>
                        <p className='text-red-500'>Error: {error}</p>
                        <EmployerDetail employer={exampleEmployer} />
                    </div>
                )}
                {employer && (
                    <div className='flex flex-col w-content my-5 justify-center items-center'>
                        <EmployerDetail employer={employer} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default EmployerDetailPage;
