import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Worker } from '../../interfaces/detail';
import { getWorkerProfile } from '../../services/worker.service';
import { exampleWorker } from '../../components/detail/data';
import { PageBanner, Loading, Error } from '../../components/Common';
import WorkerDetail from '../../components/detail/worker/WorkerDetail';

const WorkerDetailPage: React.FC = () => {
    const { workerId } = useParams();
    const [worker, setWorker] = useState<Worker | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const fullName = `${worker?.lastName || 'Worker'} ${worker?.firstName || ''}`;

    if (!workerId) {
        return <Error message='Wroker ID is required' />;
    }

    useEffect(() => {
        const fetchEmployerProfile = async () => {
            try {
                const response = await getWorkerProfile(workerId);
                setError('');
                setWorker(response.data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployerProfile();
    }, []);
    const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Cvs', href: '/cvs' }, { label: 'Detail' }];
    return (
        <div>
            <PageBanner title={fullName} breadcrumbs={breadcrumbs} />
            {loading && <Loading className='!h-16' />}
            <div className='flex flex-col w-full my-5 gap-4 items-center justify-center'>
                {error && (
                    <div className='flex flex-col w-content my-5 gap-4 items-center justify-center'>
                        <p className='text-red-500'>Error: {error}</p>
                        <WorkerDetail worker={exampleWorker} />
                    </div>
                )}
                {worker && (
                    <div className='flex flex-col w-content my-5 justify-center items-center'>
                        <WorkerDetail worker={worker} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default WorkerDetailPage;
