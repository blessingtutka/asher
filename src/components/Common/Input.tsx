import React from 'react';
import validation from '../../utils/validation';
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

export interface FormInputData {
    label: string;
    type: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    icon?: IconProp;
}

export interface FormInputProps {
    input: FormInputData;
    id: number;
    register: UseFormRegister<FieldValues>;
    errors?: FieldErrors<FieldValues>;
}

const FormInput: React.FC<FormInputProps> = ({ input, id, register, errors }) => {
    const errorMessages = errors && errors[input.name]?.message;
    const errorMessageString = typeof errorMessages === 'string' ? errorMessages : undefined;
    // const hasError = !!(errors && errorMessages);
    const hasError = !!errorMessageString;

    return (
        <div className='formInput flex flex-col gap-2'>
            <label htmlFor={`Input${id}`}>
                <b>{input.label}</b>
                {input.required && <span className=' text-red-600'>*</span>}
            </label>
            <div className='relative'>
                <input
                    id={`Input${id}`}
                    type={input.type}
                    placeholder={input.placeholder}
                    {...register(input.name, validation(input))}
                    className={`form-control w-full pr-10 ${hasError ? 'error' : ''} ${input.icon ? 'pl-9' : ''}`}
                />
                {input.icon && (
                    <FontAwesomeIcon
                        icon={input.icon}
                        className='text-[#626262] absolute inset-y-0 left-3 top-[18px] flex items-center pointer-events-none'
                    />
                )}
            </div>
            {hasError && (
                <span className='text-red-600'>
                    <FontAwesomeIcon icon={faTriangleExclamation} className='mr-2' /> {errorMessageString}
                </span>
            )}
        </div>
    );
};

export default FormInput;
