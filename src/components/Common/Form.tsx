import React from 'react';
import FormInput, { FormInputData } from '../Common/Input';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormProps {
    inputs: FormInputData[];
    handleOnSubmit: SubmitHandler<any>;
}

const Form: React.FC<FormProps> = ({ inputs, handleOnSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div className='login w-full flex flex-col gap-5'>
            <form onSubmit={handleSubmit(handleOnSubmit)} className='w-full flex flex-col gap-4'>
                <div className='w-full flex flex-col gap-4'>
                    {inputs.map((input, index) => (
                        <FormInput key={index} input={input} id={index + 1} register={register} errors={errors} />
                    ))}
                </div>
                <button type='submit' className='w-full rounded-md bg-primary p-2 text-white'>
                    Send
                </button>
            </form>
        </div>
    );
};

export default Form;
