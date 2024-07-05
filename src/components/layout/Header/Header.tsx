import HeaderNav from './HeaderNav';
import BrandIcon from './BrandIcon';
import Buttons from './Buttons';
import MenuIcon from './MenuIcon';
import HeaderContextProvider from '../../../context/HeaderContext';
export default function Header() {
    return (
        <HeaderContextProvider>
            <div id='header' className='header relative flex justify-between items-center w-full bg-white shadow-header px-6 h-20'>
                <BrandIcon />
                <HeaderNav />
                <Buttons />
                <MenuIcon />
            </div>
        </HeaderContextProvider>
    );
}
