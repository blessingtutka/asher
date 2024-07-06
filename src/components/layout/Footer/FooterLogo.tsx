import { Link } from 'react-router-dom';
import HeaderLogo from '../../../assets/images/logos/footer-logo.png';
export default function FooterLogo() {
    return (
        <Link to='/' className='h-8 order-1 md:order-2'>
            <img src={HeaderLogo} alt='brand-icon' className='h-8' />
        </Link>
    );
}
