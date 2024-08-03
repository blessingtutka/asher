import React from 'react';

interface EmployerDecriptionProps {
    employerDescritpion?: string;
}

const EmployerDecription: React.FC<EmployerDecriptionProps> = ({ employerDescritpion }) => {
    return (
        <div className='mt-5'>
            <h2 className='text-2xl font-bold text-primary mb-2'>Description</h2>
            {employerDescritpion && <div className='editors' dangerouslySetInnerHTML={{ __html: employerDescritpion }} />}
        </div>
    );
};

export default EmployerDecription;
