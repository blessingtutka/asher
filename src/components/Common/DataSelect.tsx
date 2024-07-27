import React from 'react';
import AsyncSelect from 'react-select/async';
import { components, OptionProps, GroupBase } from 'react-select';

import { ActionMeta, OnChangeValue } from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface OptionType {
    label: string;
    value: string;
    icon?: IconProp;
}

interface DataSelectProps {
    placeholder?: string;
    onChange?: (newValue: OnChangeValue<OptionType, false>, actionMeta: ActionMeta<OptionType>) => void;
    loadOptions: (inputValue: string) => Promise<OptionType[]>;
}

const customOption = (props: OptionProps<OptionType, false, GroupBase<OptionType>>) => (
    <components.Option {...props}>
        {props.data.icon && <FontAwesomeIcon icon={props.data.icon} style={{ marginRight: '8px' }} />}
        {props.data.label}
    </components.Option>
);

const DataSelect: React.FC<DataSelectProps> = ({ placeholder, onChange, loadOptions }) => {
    return (
        <AsyncSelect
            loadOptions={loadOptions}
            placeholder={placeholder}
            className='w-full select'
            required
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
            onChange={onChange}
            menuPortalTarget={document.body}
            components={{ Option: customOption }}
        />
    );
};

export default DataSelect;
