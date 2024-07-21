import React from 'react';
import validation from '../../utils/validation';
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { OptionType } from './DataSelect';
export interface FormInputData {
    label: string;
    type: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    icon?: IconProp;
    options?: (inputValue: string) => Promise<OptionType[]>;
}

export interface FormInputProps {
    input: FormInputData;
    id: number;
    register: UseFormRegister<FieldValues>;
    errors?: FieldErrors<FieldValues>;
}

const FormInput: React.FC<FormInputProps> = ({ input, id, register, errors }) => {
    const errorMessages = errors && (errors[input.name]?.message as string);
    // const hasError = !!(errors && errorMessages);
    const hasError = !!errorMessages;

    return (
        <div className='formInput flex flex-col gap-2'>
            <label htmlFor={`Input${id}`}>
                <b>{input.label}</b>
                {input.required && <span className=' text-red-600'>*</span>}
            </label>
            <div className='relative'>
                {input.type == 'textarea' ? (
                    <textarea
                        id={`Input${id}`}
                        rows={5}
                        placeholder={input.placeholder}
                        {...register(input.name, validation(input))}
                        className={`form-control w-full pr-10 ${hasError ? 'error' : ''} ${input.icon ? 'pl-9' : ''}`}
                    />
                ) : (
                    <input
                        id={`Input${id}`}
                        type={input.type}
                        placeholder={input.placeholder}
                        {...register(input.name, validation(input))}
                        className={`form-control w-full pr-10 ${hasError ? 'error' : ''} ${input.icon ? 'pl-9' : ''}`}
                    />
                )}

                {input.icon && (
                    <FontAwesomeIcon
                        icon={input.icon}
                        className='text-[#626262] absolute inset-y-0 left-3 top-[18px] flex items-center pointer-events-none'
                    />
                )}
            </div>
            {hasError && (
                <span className='text-red-600'>
                    <FontAwesomeIcon icon={faTriangleExclamation} className='mr-2' /> {errorMessages}
                </span>
            )}
        </div>
    );
};

export default FormInput;
