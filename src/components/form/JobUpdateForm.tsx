import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FieldValues } from 'react-hook-form';
import { jobPostInputs } from '../../utils/inputs';
import { Job } from '../../interfaces/detail';
import { getJob, updateJob } from '../../services/job.service';
import Form from '../Common/Form';
import Error from '../Common/Error';
import notify from '../../utils/notificationService';

const JobUpdateForm = () => {
    const { id } = useParams();
    const [job, setJob] = useState<Job | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    if (!id) {
        return <Error message='Job ID is required' />;
    }

    useEffect(() => {
        const fetchJob = async () => {
            setLoading(true);
            try {
                const response = await getJob(id);
                setJob(response.data);
            } catch (err: any) {
                notify.error(`Error fetching job: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchJob();
    }, [id]);

    const handleSubmit = async (data: FieldValues) => {
        setLoading(true);
        try {
            await updateJob(id, data);
            notify.success('Job updated successfully!');
        } catch (error: any) {
            notify.error(`Error updating job: ${error.response?.data?.message || 'An error occurred.'}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='w-content py-5 flex justify-center items-center'>
            <Form inputs={jobPostInputs} handleOnSubmit={handleSubmit} loading={loading} initialValues={job || {}} />
        </div>
    );
};

export default JobUpdateForm;
