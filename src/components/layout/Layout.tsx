import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import '../../assets/css/layout.css';
import { useApp } from '../../context/ApplicationContext';
import AuthModal from '../../pages/auth/AuthModal';
import { ScrollRestoration } from 'react-router-dom';
const Layout = () => {
    const { modalOpen } = useApp();
    return (
        <div className='wraper min-h-lvh flex flex-col'>
            <Header />
            <main className='w-full'>
                <ScrollRestoration />
                <Outlet />
            </main>
            <Footer />
            {modalOpen && <AuthModal />}
        </div>
    );
};

export default Layout;
