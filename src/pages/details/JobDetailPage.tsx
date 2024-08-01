import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Job } from '../../interfaces/detail';
import { getJob } from '../../services/job.service';
import Error from '../../components/Common/Error';
import notify from '../../utils/notificationService';
import Loading from '../../components/Common/Loading';
import PageBanner from '../../components/Common/PageBanner';
import JobDetail from '../../components/detail/job/JobDetail';

const JobDetailPage: React.FC = () => {
    const { jobId } = useParams();
    const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Jobs', href: '/jobs' }, { label: 'Detail' }];

    const [job, setJob] = useState<Job | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    if (!jobId) {
        return <Error message='Job ID is required' />;
    }

    useEffect(() => {
        const fetchJob = async () => {
            setLoading(true);
            try {
                const response = await getJob(jobId);
                setJob(response.data);
            } catch (err: any) {
                notify.error(`Error fetching job`);
            } finally {
                setLoading(false);
            }
        };

        fetchJob();
    }, [jobId]);
    return (
        <div>
            <PageBanner title={job?.title ? job.title : 'job'} breadcrumbs={breadcrumbs} />
            {loading && <Loading className='!h-28' />}

            {job && (
                <div className='flex flex-col my-5 justify-center items-center'>
                    <JobDetail job={job} />
                </div>
            )}
        </div>
    );
};

export default JobDetailPage;
