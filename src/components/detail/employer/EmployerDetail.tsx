import React from 'react';
import EmployerInfo from './EmployerInfo';
import EmployerDecription from './EmployerDescription';
import { Employer } from '../../../interfaces/detail';

interface employerDetailProps {
    employer: Employer;
}

const EmployerDetail: React.FC<employerDetailProps> = ({ employer }) => {
    return (
        <div className={'detail w-full worker-detail text-content'}>
            <EmployerInfo employer={employer} />
            {employer.description && <EmployerDecription employerDescritpion={employer.description} />}
        </div>
    );
};

export default EmployerDetail;
