import React from 'react';
import { Subtitle } from '../../assets/images/icons';
interface TitleProps {
    children: React.ReactNode;
    className?: string;
    subtitle?: string;
}

const Title: React.FC<TitleProps> = ({ children, subtitle, className }) => {
    return (
        <div className='row flexed'>
            <div className={`col-10 flex-col flexed text-primary ${className}`}>
                {subtitle && (
                    <h6 className='flexed gap-2 '>
                        <Subtitle width={20} height={20} stroke='currentColor' />
                        {subtitle}
                    </h6>
                )}
                <h2 className='font-medium text-center text-2xl md:text-4xl mb-4'>{children}</h2>
            </div>
        </div>
    );
};

export default Title;
