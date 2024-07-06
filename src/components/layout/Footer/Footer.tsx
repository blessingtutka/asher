import React from 'react';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
const Footer: React.FC = () => {
    return (
        <footer className='bg-primary text-white py-4 px-3 md:px-0'>
            <FooterTop />
            <FooterBottom />
        </footer>
    );
};

export default Footer;
