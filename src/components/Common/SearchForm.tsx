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
        <div className='col-12 flex justify-end'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-fit flex gap-2 border border-gray-300 rounded p-2'>
                <input type='text' placeholder='Search...' {...register('query')} className='search-input p-2' />
                <select {...register('category')} className='search-select p-2 border-l border-gray-300  '>
                    <option value=''>Job Category</option>
                    <option value='engineering'>Engineering</option>
                    <option value='design'>Design</option>
                    <option value='management'>Management</option>
                    <option value='sales'>Sales</option>
                </select>
                <button type='submit' className='p-2 bg-primary text-white rounded'>
                    <SearchIcon />
                </button>
            </form>
        </div>
    );
};

export default SearchForm;
