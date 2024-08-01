import { useEffect, useState } from 'react';
import Jobs from '../components/jobs/Jobs';
import PageBanner from '../components/Common/PageBanner';
import { getAllJobs } from '../services/job.service';
import { Job } from '../interfaces/detail';
import Loading from '../components/Common/Loading';
import Error from '../components/Common/Error';
import Empty from '../components/Common/Empty';
export default function JobPage() {
    const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Job Offers' }];
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEmployerJobs = async () => {
            try {
                const response = await getAllJobs();
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
        <div>
            <PageBanner title={'Job Offers'} breadcrumbs={breadcrumbs} />
            <div className='flex flex-col min-h-32 my-5 justify-center items-center'>
                {loading ? (
                    <Loading className='!h-16' />
                ) : error ? (
                    <Error message={error} />
                ) : jobs.length === 0 ? (
                    <Empty message='No posted job yet' />
                ) : (
                    <Jobs jobs={jobs} />
                )}
            </div>
        </div>
    );
}
