import React from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon } from '../../../assets/images/icons';

interface JobInfoItemProps {
    label: string;
    value?: string | number;
    link?: string;
}

const JobInfoItem: React.FC<JobInfoItemProps> = ({ label, value, link }) => {
    return (
        <>
            {value && (
                <div className='flex flex-col gap-y-3'>
                    <b className='flex gap-x-2 items-center text-primary'>
                        <CheckIcon />
                        {label}
                    </b>
                    <span>{link ? <Link to={link}>{value}</Link> : <>{value}</>}</span>
                </div>
            )}
        </>
    );
};

export default JobInfoItem;
