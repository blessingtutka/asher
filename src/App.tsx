import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';

// Styles
import './assets/css/common.css';

const router = createBrowserRouter(routes);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
