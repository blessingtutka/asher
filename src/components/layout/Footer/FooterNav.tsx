import { Link } from 'react-router-dom';

// Interfaces
interface Nav {
    value: string;
    link: string;
}

export default function FooterNav() {
    const nav: Nav[] = [
        { value: 'Home', link: '/' },
        { value: 'Jobs', link: '/jobs' },
        { value: 'Cvs', link: '/cvs' },
    ];

    return (
        <nav className='text-center flex space-x-4 gap-x-6'>
            {nav.map((navlink, index) => (
                <Link key={index} title={navlink.value} to={navlink.link} className='footer-link'>
                    {navlink.value}
                </Link>
            ))}
        </nav>
    );
}
