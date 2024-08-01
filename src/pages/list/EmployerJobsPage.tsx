import React, { useState, useEffect } from 'react';
import Error from '../../components/Common/Error';
import Empty from '../../components/Common/Empty';
import Loading from '../../components/Common/Loading';
import PageBanner from '../../components/Common/PageBanner';
import EmployerJobs from '../../components/jobs/EmployerJobs';
import { Job } from '../../interfaces/detail';
import { getAuthEmployerJobs } from '../../services/job.service';

const EmployerJobsPage: React.FC = () => {
    const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Jobs' }];
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEmployerJobs = async () => {
            try {
                const response = await getAuthEmployerJobs();
                setJobs(response.data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployerJobs();
    }, []);

    return (
        <div className='flex flex-col *:w-full justify-center items-center'>
            <PageBanner title={'Your Posted Job'} breadcrumbs={breadcrumbs} />
            <div className='!w-content flex flex-col min-h-40 my-5 justify-center items-center'>
                {loading ? (
                    <Loading className='!h-16' />
                ) : error ? (
                    <Error message={error} />
                ) : jobs.length === 0 ? (
                    <Empty message='You have no posted job' />
                ) : (
                    <EmployerJobs jobs={jobs} />
                )}
            </div>
        </div>
    );
};

export default EmployerJobsPage;
