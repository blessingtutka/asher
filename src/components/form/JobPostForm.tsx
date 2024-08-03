import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FieldValues } from 'react-hook-form';
import { jobPostInputs } from '../../utils/inputs';
import { createJob } from '../../services/job.service';
import notify from '../../utils/notificationService';
import Form from '../Common/Form';

const JobPostForm: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit = async (data: FieldValues) => {
        setLoading(true);
        try {
            await createJob(data);
            navigate('/employer/jobs');
            notify.success('Job post created successfully!');
        } catch (error: any) {
            notify.error('Error Creating Job, Please Try again');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='w-content py-5 flex justify-center items-center'>
            <Form inputs={jobPostInputs} handleOnSubmit={handleSubmit} loading={loading} />
        </div>
    );
};

export default JobPostForm;
