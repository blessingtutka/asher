import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FieldValues } from 'react-hook-form';
import { applyInputs } from '../../utils/inputs';
import { createApplication } from '../../services/apply.service';
import { Form } from '../Common';
import notify from '../../utils/notificationService';

const ApplyForm: React.FC<{ jobId?: string }> = ({ jobId }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit = async (data: FieldValues) => {
        setLoading(true);
        try {
            const applicationdata = { ...data, jobId: jobId };
            await createApplication(applicationdata);
            navigate('/worker/applications');
            notify.success('Application post created successfully!');
        } catch (error: any) {
            notify.error('Error Creating Application, Please Try again');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className='w-content py-5 flex justify-center items-center'>
            <Form inputs={applyInputs} handleOnSubmit={handleSubmit} loading={loading} />
        </div>
    );
};

export default ApplyForm;
