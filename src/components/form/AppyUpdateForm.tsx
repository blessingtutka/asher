import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FieldValues } from 'react-hook-form';
import { applyInputs } from '../../utils/inputs';
import { Application } from '../../interfaces/detail';
import { getApplication, updateApplication } from '../../services/apply.service';
import Form from '../Common/Form';
import Error from '../Common/Error';
import notify from '../../utils/notificationService';

const ApplyUpdateForm: React.FC = () => {
    const { appId } = useParams();
    const navigate = useNavigate();
    const [apply, setApply] = useState<Application | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    if (!appId) {
        return <Error message='Job ID is required' />;
    }

    useEffect(() => {
        const fetchJob = async () => {
            setLoading(true);
            try {
                const response = await getApplication(appId);
                setApply(response.data);
            } catch (err: any) {
                notify.error(`Error fetching application`);
            } finally {
                setLoading(false);
            }
        };

        fetchJob();
    }, [appId]);

    const handleSubmit = async (data: FieldValues) => {
        setLoading(true);
        try {
            const { workerId, worker, jobId, job, ...sended } = data;
            await updateApplication(appId, sended);
            navigate('/worker/applications');
            notify.success('Application updated successfully!');
        } catch (error: any) {
            notify.error(`Error updating application`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='w-content py-5 flex justify-center items-center'>
            <Form inputs={applyInputs} handleOnSubmit={handleSubmit} initialValues={apply || {}} loading={loading} />
        </div>
    );
};

export default ApplyUpdateForm;
