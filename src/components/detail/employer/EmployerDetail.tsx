import React from 'react';
import EmployerInfo from './EmployerInfo';
import EmployerDecription from './EmployerDescription';
import { Employer } from '../../../interfaces/detail';

interface employerDetailProps {
    employer: Employer;
    className?: string;
}

const EmployerDetail: React.FC<employerDetailProps> = ({ employer, className }) => {
    return (
        <div className={'detail w-full worker-detail text-content ' + className}>
            <EmployerInfo employer={employer} />
            {employer.description && <EmployerDecription employerDescritpion={employer.description} />}
        </div>
    );
};

export default EmployerDetail;
