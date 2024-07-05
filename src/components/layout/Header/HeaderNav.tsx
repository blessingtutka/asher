import AnimateNav from './AnimateNav';
import NavLink from './NavLink';
// Interfaces
interface Nav {
    value: string;
    link: string;
}

export default function HeaderNav() {
    const nav: Nav[] = [
        { value: 'Home', link: '/' },
        { value: 'Jobs', link: '/jobs' },
        { value: 'Cvs', link: '/cvs' },
    ];

    return (
        <AnimateNav>
            {nav.map((navlink, index) => (
                <NavLink key={index} title={navlink.value} href={navlink.link} />
            ))}
        </AnimateNav>
    );
}
