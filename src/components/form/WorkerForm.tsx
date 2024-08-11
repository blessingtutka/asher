import { useState, useEffect } from 'react';
import { Form } from '../Common';
import { useNavigate } from 'react-router-dom';
import { FieldValues } from 'react-hook-form';
import { workerInputs } from '../../utils/inputs';
import { setWorkerProfile, getAuthWorkerProfile } from '../../services/worker.service';
import { Worker } from '../../interfaces/detail';
import notify from '../../utils/notificationService';
const WorkerForm = () => {
    const navigate = useNavigate();
    const [worker, setWorker] = useState<Worker | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchWorkerProfile = async () => {
            try {
                const response = await getAuthWorkerProfile();
                setWorker(response.data);
            } catch (err: any) {
                notify.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchWorkerProfile();
    }, []);
    const handleFormSubmit = async (data: FieldValues) => {
        try {
            setLoading(true);
            const { userId, user, ...sended } = data;
            const response = await setWorkerProfile(sended);
            navigate('/worker/profile');
            notify.success('Worker Profile Set');
            setWorker(response.data);
        } catch (err: any) {
            notify.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='w-content py-5 flex justify-center items-center'>
            <Form inputs={workerInputs} handleOnSubmit={handleFormSubmit} initialValues={worker || {}} loading={loading} />
        </div>
    );
};

export default WorkerForm;
