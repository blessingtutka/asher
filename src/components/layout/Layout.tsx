import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import '../../assets/css/layout.css';
const Layout = () => {
    return (
        <div>
            <Header />
            <main className='w-full flexed'>
                <div className='w-[90%] md:w-4/5'>
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
