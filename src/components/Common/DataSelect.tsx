import React, { useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import { components, OptionProps, GroupBase } from 'react-select';
import { FieldValues, FieldErrors } from 'react-hook-form';
import { ActionMeta, OnChangeValue } from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { formatString } from '../../utils/stringFormater';

export interface OptionType {
    label: string;
    value: string;
    icon?: IconProp;
}

interface DataSelectProps {
    placeholder?: string;
    onChange?: (newValue: OnChangeValue<OptionType, false>, actionMeta: ActionMeta<OptionType>) => void;
    loadOptions: (inputValue: string) => Promise<OptionType[]>;
    defaultValue?: string;
    name: string;
    errors?: FieldErrors<FieldValues>;
}

const customOption = (props: OptionProps<OptionType, false, GroupBase<OptionType>>) => (
    <components.Option {...props}>
        {props.data.icon && <FontAwesomeIcon icon={props.data.icon} style={{ marginRight: '8px' }} />}
        {props.data.label}
    </components.Option>
);

const DataSelect: React.FC<DataSelectProps> = ({ placeholder, name, onChange, loadOptions, defaultValue, errors }) => {
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
    const errorMessages = errors && (errors[name]?.message as string);
    const hasError = !!errorMessages;

    useEffect(() => {
        if (defaultValue) {
            loadOptions(formatString(defaultValue)).then((options) => {
                const option = options.find((opt) => opt.value === defaultValue);
                setSelectedOption(option || null);
            });
        }
    }, [defaultValue, loadOptions]);

    const handleChange = (newValue: OnChangeValue<OptionType, false>, actionMeta: ActionMeta<OptionType>) => {
        setSelectedOption(newValue as OptionType);
        if (onChange) {
            onChange(newValue, actionMeta);
        }
    };

    return (
        <div className='formInput flex flex-col gap-2'>
            <AsyncSelect
                name={name}
                loadOptions={loadOptions}
                placeholder={placeholder}
                className='w-full select'
                defaultOptions
                styles={{
                    control: (base, state) => ({
                        ...base,
                        borderColor: state.isFocused ? '#1e003f' : '',
                        boxShadow: state.isFocused ? 'none' : 'none',
                        borderRadius: '12px',
                        padding: '8px 16px 8px 16px',
                        '&:hover': {
                            borderColor: state.isFocused ? '#1e003f' : '#b2b2b2',
                        },
                    }),
                    menuPortal: (provided) => ({ ...provided, zIndex: 99999 }),
                    menu: (provided) => ({ ...provided, zIndex: 99999 }),
                }}
                onChange={handleChange}
                menuPortalTarget={document.body}
                components={{ Option: customOption }}
                value={selectedOption}
            />
            {hasError && (
                <span className='text-red-600'>
                    <FontAwesomeIcon icon={faTriangleExclamation} className='mr-2' /> {errorMessages}
                </span>
            )}
        </div>
    );
};

export default DataSelect;
