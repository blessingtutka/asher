import React from 'react';
import { useForm } from 'react-hook-form';
import { SearchIcon } from '../../assets/images/icons';

interface SearchFormProps {
    onSearch?: (data: SearchData) => void;
}

interface SearchData {
    query: string;
    category: string;
}

const SearchForm: React.FC<SearchFormProps> = () => {
    const { register, handleSubmit } = useForm<SearchData>();

    const onSubmit = (data: SearchData) => {
        console.log(data);
    };

    return (
        <div className='flex'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-fit flex gap-2 border border-gray-300 rounded p-1 *:text-sm'>
                <input type='text' placeholder='Search...' {...register('query')} className='search-input p-1' />
                <select {...register('category')} className='search-select p-1 border-l border-gray-300  '>
                    <option value=''>Job Category</option>
                    <option value='engineering'>Engineering</option>
                    <option value='design'>Design</option>
                    <option value='management'>Management</option>
                    <option value='sales'>Sales</option>
                </select>
                <button type='submit' className='p-1 bg-primary text-white rounded'>
                    <SearchIcon />
                </button>
            </form>
        </div>
    );
};

export default SearchForm;
