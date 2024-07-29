import Form from '../Common/Form';
import { useState, useEffect } from 'react';
import { getYourEmployerProfile, setEmployerProfile } from '../../services/employer.service';
import { Employer } from '../../interfaces/detail';
import { FieldValues } from 'react-hook-form';
import { employerInputs } from '../../utils/inputs';
import notify from '../../utils/notificationService';

const EmployerForm = () => {
    const [employer, setEmployer] = useState<Employer | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchEmployerProfile = async () => {
            try {
                const response = await getYourEmployerProfile();
                setEmployer(response.data);
            } catch (err: any) {
                notify.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployerProfile();
    }, []);
    const handleFormSubmit = async (data: FieldValues) => {
        try {
            setLoading(true);
            const response = await setEmployerProfile(data);
            notify.success('Employer Profile Set');
            setEmployer(response.data);
        } catch (err: any) {
            notify.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='w-content py-5 flex justify-center items-center'>
            <Form inputs={employerInputs} handleOnSubmit={handleFormSubmit} initialValues={employer || {}} loading={loading} />
        </div>
    );
};

export default EmployerForm;
