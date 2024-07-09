import React from 'react';
import Left from './LeftContent';
import Right from './RightContent';

const About: React.FC = () => {
    return (
        <section className='w-content flex flex-col md:flex-row justify-between !items-stretch py-12 px-4 gap-4'>
            <Left />
            <Right />
        </section>
    );
};

export default About;
