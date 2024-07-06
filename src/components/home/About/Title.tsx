import React from 'react';

interface Title {
    text: string;
}

const Title: React.FC = () => {
    return (
        <h2 className='text-4xl font-bold text-primary mb-4'>
            Popular <span className='text-secondary'>Job</span> Portal
        </h2>
    );
};

export default Title;
