import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import '../../assets/css/layout.css';
const Layout = () => {
    return (
        <div>
            <Header />
            <main className='container'>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
