import React, { useEffect, useState } from 'react';
import PageBanner from '../../components/Common/PageBanner';
import EmployerDetail from '../../components/detail/employer/EmployerDetail';
import { Link } from 'react-router-dom';
import Loading from '../../components/Common/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenClip } from '@fortawesome/free-solid-svg-icons';
import { exampleEmployer } from '../../components/detail/data';
import { getYourEmployerProfile } from '../../services/employer.service';
const EmployerProfile: React.FC = () => {
    const [employer, setEmployer] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEmployerProfile = async () => {
            try {
                const response = await getYourEmployerProfile();
                setEmployer(response.data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployerProfile();
    }, []);

    const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Jobs', href: '/jobs' }, { label: 'Employer' }, { label: 'Profile' }];

    return (
        <div>
            <PageBanner title={employer ? employer.name : 'Employer'} breadcrumbs={breadcrumbs} />
            <div className='flex flex-col my-5 justify-center items-center'>
                {loading && (
                    <div className='h-48 flex justify-center items-center'>
                        <Loading />
                    </div>
                )}
                {error && (
                    <div className='flex flex-col w-content gap-4 items-center justify-center'>
                        <p className='text-red-500'>Error: {error}</p>
                        <EmployerDetail employer={exampleEmployer} />
                    </div>
                )}
                {employer && (
                    <div className='flex flex-col w-content gap-4'>
                        <Link to='/employer/profile-setting' className='links w-full'>
                            <FontAwesomeIcon icon={faPenClip} className='mr-2' />
                            Set Your Profile
                        </Link>
                        <EmployerDetail employer={employer} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default EmployerProfile;
