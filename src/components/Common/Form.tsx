import React from 'react';
import FormInput, { FormInputData } from '../Common/Input';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import UploadField from './UploadField';
import DataSelect from './DataSelect';
interface FormProps {
    inputs: FormInputData[];
    handleOnSubmit: SubmitHandler<any>;
}

const Form: React.FC<FormProps> = ({ inputs, handleOnSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        setValue,
    } = useForm();

    return (
        <div className='login w-full flex flex-col gap-5'>
            <form onSubmit={handleSubmit(handleOnSubmit)} className='w-full flex flex-col gap-4'>
                <div className='w-full flex flex-col gap-4'>
                    {inputs.map((input, index) => {
                        if (input.type == 'file') {
                            return (
                                <Controller
                                    key={index + 1}
                                    name={input.name}
                                    control={control}
                                    rules={{ required: input.required ? 'File is required' : false }}
                                    render={({ field }) => (
                                        <UploadField
                                            name={field.name}
                                            setValue={setValue}
                                            placeholder={input.placeholder}
                                            error={errors[input.name]?.message as string}
                                        />
                                    )}
                                />
                            );
                        }
                        if (input.type == 'select') {
                            return (
                                <div className='formInput flex flex-col gap-2'>
                                    <label htmlFor={`Input${index + 1}`}>
                                        <b>{input.label}</b>
                                        {input.required && <span className=' text-red-600'>*</span>}
                                    </label>
                                    <Controller
                                        key={index}
                                        name={input.name}
                                        control={control}
                                        rules={{ required: input.required ? 'Required' : false }}
                                        render={({ field }) => (
                                            <DataSelect
                                                {...field}
                                                loadOptions={input?.options || (() => Promise.resolve([]))}
                                                placeholder={input.placeholder}
                                                onChange={(selectedOption) => field.onChange(selectedOption)}
                                            />
                                        )}
                                    />
                                </div>
                            );
                        }
                        return <FormInput key={index} input={input} id={index + 1} register={register} errors={errors} />;
                    })}
                </div>
                <button type='submit' className='w-full rounded-md bg-primary p-2 text-white'>
                    Send
                </button>
            </form>
        </div>
    );
};

export default Form;
