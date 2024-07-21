import Form from '../Common/Form';
import { FieldValues } from 'react-hook-form';
import { employerInputs } from '../../utils/inputs';

const EmployerForm = () => {
    const handleSubmit = (data: FieldValues) => {
        console.log(data);
    };

    return (
        <div className='w-content py-5 flex justify-center items-center'>
            <Form inputs={employerInputs} handleOnSubmit={handleSubmit} />
        </div>
    );
};

export default EmployerForm;
