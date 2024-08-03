import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenClip } from '@fortawesome/free-solid-svg-icons';
import { exampleWorker } from '../../components/detail/data';
import { getAuthWorkerProfile } from '../../services/worker.service';
import PageBanner from '../../components/Common/PageBanner';
import { Worker } from '../../interfaces/detail';
import WorkerDetail from '../../components/detail/worker/WorkerDetail';
import Loading from '../../components/Common/Loading';
const WorkerProfile: React.FC = () => {
    const [worker, setWorker] = useState<Worker | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const fullName = `${worker?.lastName || 'Worker'} ${worker?.firstName || ''}`;

    useEffect(() => {
        const fetchWorkerProfile = async () => {
            try {
                const response = await getAuthWorkerProfile();
                setError('');
                setWorker(response.data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWorkerProfile();
    }, []);

    const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Worker' }, { label: 'Profile' }];

    return (
        <div>
            <PageBanner title={worker ? fullName : 'Worker'} breadcrumbs={breadcrumbs} />
            <div className='flex w-full flex-col my-5 justify-center items-center'>
                {loading && <Loading className='!h-28' />}
                {error && (
                    <div className='flex flex-col my-5 w-full gap-4 items-center justify-center'>
                        <p className='text-red-500'>Error: {error}</p>
                        <WorkerDetail worker={exampleWorker} />
                    </div>
                )}
                {worker && (
                    <div className='flex flex-col my-5 w-content gap-4'>
                        <Link to='/worker/profile-setting' className='links'>
                            <FontAwesomeIcon icon={faPenClip} className='mr-2' />
                            Set Your Profile
                        </Link>
                        <WorkerDetail worker={worker} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default WorkerProfile;
