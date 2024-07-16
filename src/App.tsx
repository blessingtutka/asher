import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppContextProvider from './context/ApplicationContext';
import routes from './routes';

// Styles
import './assets/css/common.css';

const router = createBrowserRouter(routes);

const App = () => {
    return (
        <AppContextProvider>
            <RouterProvider router={router} />
        </AppContextProvider>
    );
};

export default App;
