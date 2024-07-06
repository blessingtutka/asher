import React from 'react';
import FooterNav from './FooterNav';
import SocialIcons from './SocialIcons';
const FooterBottom: React.FC = () => {
    return (
        <div
            className='container mx-auto flex flex-col gap-y-4 md:flex-row justify-between 
        items-center px-4 py-4 border-t border-solid border-image-gradient'
        >
            <FooterNav />
            <SocialIcons />
        </div>
    );
};

export default FooterBottom;
