import React from 'react';
import { CheckIcon } from '../../../assets/images/icons';

interface JobInfoItemProps {
    label: string;
    value: string;
}

const JobInfoItem: React.FC<JobInfoItemProps> = ({ label, value }) => {
    return (
        <div className='flex flex-col gap-y-3'>
            <b className='flex gap-x-2 items-center text-primary'>
                <CheckIcon />
                {label}
            </b>
            <span>{value}</span>
        </div>
    );
};

export default JobInfoItem;
