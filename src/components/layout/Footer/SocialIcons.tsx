import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faXTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// Interfaces
interface Icon {
    icon: IconDefinition;
    link: string;
}

const SocialIcons: React.FC = () => {
    const icons: Icon[] = [
        { icon: faFacebookF, link: 'https://www.facebook.com' },
        { icon: faLinkedin, link: 'https://www.linkedin.com' },
        { icon: faXTwitter, link: 'https://www.twitter.com' },
        { icon: faGithub, link: 'https://www.github.com' },
        { icon: faInstagram, link: 'https://www.instagram.com' },
    ];

    return (
        <div className='flex space-x-4'>
            {icons.map((icon, index) => (
                <Link key={index} to={icon.link} className='footer-link'>
                    <FontAwesomeIcon icon={icon.icon} />
                </Link>
            ))}
        </div>
    );
};

export default SocialIcons;
