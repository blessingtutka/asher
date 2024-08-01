import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getEmployerProfile } from '../../services/employer.service';
import { Employer } from '../../interfaces/detail';
import Error from '../../components/Common/Error';
import Loading from '../../components/Common/Loading';
import PageBanner from '../../components/Common/PageBanner';
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
            {error && <Error message='Error getting Employer Detail' />}
            {employer && (
                <div className='flex flex-col my-5 justify-center items-center'>
                    <EmployerDetail employer={employer} className='!w-content' />
                </div>
            )}
        </div>
    );
};

export default EmployerDetailPage;
