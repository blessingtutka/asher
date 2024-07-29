import Layout from '../components/layout/Layout';
import publicRoutes from './public.routes';
import privateRoutes from './private.routes';
import { Navigate } from 'react-router-dom';

const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [...publicRoutes, ...privateRoutes],
    },
    { path: '*', element: <Navigate to='/' /> },
];

export default routes;
