import React from 'react';

interface TextProps {
    children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ children }) => {
    return <p className='text-content mb-4'>{children}</p>;
};

export default Text;
