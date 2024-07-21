import Form from '../Common/Form';
import { FieldValues } from 'react-hook-form';
import { jobPostInputs } from '../../utils/inputs';

const JobPostForm = () => {
    const handleSubmit = (data: FieldValues) => {
        console.log(data);
    };

    return (
        <div className='w-content py-5 flex justify-center items-center'>
            <Form inputs={jobPostInputs} handleOnSubmit={handleSubmit} />
        </div>
    );
};

export default JobPostForm;
