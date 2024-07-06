import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import '../../assets/css/layout.css';
const Layout = () => {
    return (
        <div>
            <Header />
            <main className='container'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
