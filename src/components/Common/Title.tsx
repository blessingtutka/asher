import React from 'react';
import { Subtitle } from '../../assets/images/icons';
interface TitleProps {
    children: React.ReactNode;
    subtitle?: string;
}

const Title: React.FC<TitleProps> = ({ children, subtitle }) => {
    return (
        <div className='row flexed'>
            <div className='col-10 flex-col flexed'>
                {subtitle && (
                    <h6 className='flexed gap-2 text-primary'>
                        <Subtitle width={20} height={20} stroke='rgb(30 0 63)' />
                        {subtitle}
                    </h6>
                )}
                <h2 className='text-primary font-medium text-center text-2xl md:text-4xl mb-4'>{children}</h2>
            </div>
        </div>
    );
};

export default Title;
