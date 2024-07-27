import HeaderNav from './HeaderNav';
import BrandIcon from './BrandIcon';
import Buttons from './Buttons';
import MenuIcon from './MenuIcon';
import { useLocation } from 'react-router-dom';
import { useUser } from '../../../context/UserContext';
import Avatar from './Avatar';
import HeaderContextProvider from '../../../context/HeaderContext';
export default function Header() {
    const { getUser } = useUser();
    const location = useLocation();
    const user = getUser();

    return (
        <HeaderContextProvider>
            <div id='header' className='header relative flex justify-between items-center w-full bg-white shadow-header px-6 h-20'>
                <BrandIcon />
                <HeaderNav />
                {user && location.pathname != '/server' ? <Avatar email={user.email} role={user.role} /> : <Buttons />}
                <MenuIcon />
            </div>
        </HeaderContextProvider>
    );
}
