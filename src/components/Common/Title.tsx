import React from 'react';

interface TitleProps {
    children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
    return <h2 className='text-content mb-4'>{children}</h2>;
};

export default Title;
