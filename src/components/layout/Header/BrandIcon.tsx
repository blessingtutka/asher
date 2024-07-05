import { Link } from 'react-router-dom';
import HeaderLogo from '../../../assets/images/logos/header-logo.png';
export default function BrandIcon() {
    return (
        <Link to='/' className='h-8 order-2 mlg:order-1'>
            <img src={HeaderLogo} alt='brand-icon' className='h-8' />
        </Link>
    );
}
