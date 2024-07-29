import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppContextProvider from './context/ApplicationContext';
import UserProvider from './context/UserContext';
import routes from './routes/routes';

// Styles
import './assets/css/common.css';

const router = createBrowserRouter(routes);

const App = () => {
    return (
        <UserProvider>
            <AppContextProvider>
                <RouterProvider router={router} />
            </AppContextProvider>
        </UserProvider>
    );
};

export default App;
