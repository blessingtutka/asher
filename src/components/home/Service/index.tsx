import React from 'react';
import Services from './Services';
import { Title } from '../../Common';
const Service: React.FC = () => {
    return (
        <section className='flex flex-col justify-between p-4 md:p-0'>
            <Title subtitle='Our Services'>Building a bridge between candidates and companies</Title>
            <Services />
        </section>
    );
};

export default Service;
