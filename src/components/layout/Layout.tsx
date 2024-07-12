import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import '../../assets/css/layout.css';
import { ScrollRestoration } from 'react-router-dom';
const Layout = () => {
    return (
        <div>
            <Header />
            <main className='w-full'>
                <ScrollRestoration />
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
