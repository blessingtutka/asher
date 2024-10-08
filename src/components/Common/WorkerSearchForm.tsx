import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import jobCategory from '../../utils/jobCategory';
import { SearchIcon } from '../../assets/images/icons';

interface WorkerSearchFormProps {
    onSearch?: (name: string, title: string) => void;
}

interface SearchData {
    name: string;
    title: string;
}

const WorkerSearchForm: React.FC<WorkerSearchFormProps> = ({ onSearch }) => {
    const { register, handleSubmit, control, reset } = useForm<SearchData>({
        defaultValues: {
            title: '',
            name: '',
        },
    });

    const onSubmit = (data: SearchData) => {
        if (onSearch) {
            onSearch(data.name, data.title);
        }
        reset({ title: '', name: '' });
    };

    return (
        <div className='flex'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-fit flex gap-2 border border-gray-300 rounded p-1 text-sm'>
                <input type='text' placeholder='Search worker...' {...register('name')} className='search-input p-1' />
                <Controller
                    name='title'
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            options={jobCategory}
                            className='w-52 search-select border-l border-gray-300'
                            placeholder='Title'
                            value={jobCategory.find((c) => c.value === field.value) || null}
                            onChange={(val) => field.onChange(val ? val.value : '')}
                            styles={{
                                control: (base, state) => ({
                                    ...base,
                                    borderColor: state.isFocused ? 'transparent' : 'transparent',
                                    boxShadow: state.isFocused ? 'none' : 'none',
                                    padding: '0px',
                                    '&:hover': {
                                        borderColor: state.isFocused ? 'transparent' : 'transparent',
                                    },
                                }),
                                menuPortal: (provided) => ({ ...provided, zIndex: 99999 }),
                                menu: (provided) => ({ ...provided, zIndex: 99999 }),
                            }}
                            isClearable
                        />
                    )}
                />
                <button type='submit' className='p-1 bg-primary text-white rounded'>
                    <SearchIcon />
                </button>
            </form>
        </div>
    );
};

export default WorkerSearchForm;
