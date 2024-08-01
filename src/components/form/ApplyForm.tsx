import Form from '../Common/Form';
import { FieldValues } from 'react-hook-form';
import { applyInputs } from '../../utils/inputs';

const ApplyForm = ({ jobId }: { jobId?: string }) => {
    const handleSubmit = (data: FieldValues) => {
        console.log(data, jobId);
    };

    return (
        <div className='w-content py-5 flex justify-center items-center'>
            <Form inputs={applyInputs} handleOnSubmit={handleSubmit} />
        </div>
    );
};

export default ApplyForm;
