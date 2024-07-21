import Form from '../Common/Form';
import { FieldValues } from 'react-hook-form';
import { workerInputs } from '../../utils/inputs';

const WorkerForm = () => {
    const handleSubmit = (data: FieldValues) => {
        console.log(data);
    };

    return (
        <div className='w-content py-5 flex justify-center items-center'>
            <Form inputs={workerInputs} handleOnSubmit={handleSubmit} />
        </div>
    );
};

export default WorkerForm;
