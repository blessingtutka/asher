import React from 'react';
import FooterLogo from './FooterLogo';
import CopyRight from './CopyRight';
const FooterTop: React.FC = () => {
    return (
        <div className='container mx-auto flex flex-col md:flex-row gap-y-4 justify-between items-center px-4 py-4'>
            <CopyRight />
            <FooterLogo />
        </div>
    );
};

export default FooterTop;
