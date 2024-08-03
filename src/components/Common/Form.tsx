// src/components/Form.tsx
import React, { useEffect } from 'react';
import { useForm, SubmitHandler, Controller, FieldValues } from 'react-hook-form';
import FormInput, { FormInputData } from '../Common/Input';
import UploadField from './UploadField';
import DataSelect from './DataSelect';
import Loading from './Loading';
import Editor from './Editor';

interface FormProps {
    inputs: FormInputData[];
    handleOnSubmit: SubmitHandler<FieldValues>;
    loading?: boolean;
    initialValues?: FieldValues;
}

const Form: React.FC<FormProps> = ({ inputs, handleOnSubmit, initialValues, loading = false }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        setValue,
        reset,
    } = useForm({
        defaultValues: initialValues || {},
    });

    useEffect(() => {
        if (initialValues) {
            reset(initialValues);
        }
    }, [initialValues, reset]);

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        handleOnSubmit(data);
        reset();
    };

    return (
        <div className='login w-full flex flex-col gap-5'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-4'>
                <div className='w-full flex flex-col gap-4'>
                    {inputs.map((input, index) => {
                        if (input.type === 'file' || input.type === 'image') {
                            return (
                                <div key={index} className='formInput flex flex-col gap-2'>
                                    <label htmlFor={`InputSelect`}>
                                        <b>{input.label}</b>
                                        {input.required && <span className='text-red-600'>*</span>}
                                    </label>
                                    <Controller
                                        key={index}
                                        name={input.name}
                                        control={control}
                                        rules={{ required: input.required ? 'File is required' : false }}
                                        render={({ field }) => (
                                            <UploadField
                                                type={input.type}
                                                name={field.name}
                                                setValue={setValue}
                                                placeholder={input.placeholder}
                                                error={errors[input.name]?.message as string}
                                            />
                                        )}
                                    />
                                </div>
                            );
                        }
                        if (input.type === 'select') {
                            return (
                                <div key={index} className='formInput flex flex-col gap-2'>
                                    <label htmlFor={`InputSelect`}>
                                        <b>{input.label}</b>
                                        {input.required && <span className='text-red-600'>*</span>}
                                    </label>
                                    <Controller
                                        name={input.name}
                                        control={control}
                                        rules={{ required: input.required ? 'Required' : false }}
                                        render={({ field: { ref, ...field } }) => (
                                            <DataSelect
                                                {...field}
                                                name={input.name}
                                                errors={errors}
                                                defaultValue={initialValues?.[input.name]}
                                                loadOptions={input?.options || (() => Promise.resolve([]))}
                                                placeholder={input.placeholder}
                                                onChange={(e: any) => field.onChange(e.value)}
                                            />
                                        )}
                                    />
                                </div>
                            );
                        }
                        if (input.type === 'editor') {
                            return (
                                <div key={index} className='formInput flex flex-col gap-2'>
                                    <label htmlFor={`Editor`}>
                                        <b>{input.label}</b>
                                        {input.required && <span className='text-red-600'>*</span>}
                                    </label>
                                    <Controller
                                        name={input.name}
                                        control={control}
                                        rules={{ required: input.required ? 'Content is required' : false }}
                                        render={({ field: { value, onChange } }) => <Editor value={value} onChange={onChange} />}
                                    />
                                </div>
                            );
                        }
                        return <FormInput key={index} input={input} id={index + 1} register={register} errors={errors} />;
                    })}
                </div>

                {loading ? (
                    <Loading />
                ) : (
                    <button type='submit' className='w-full rounded-md bg-primary p-2 text-white'>
                        Send
                    </button>
                )}
            </form>
        </div>
    );
};

export default Form;
