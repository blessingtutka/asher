import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';
import CvPage from './pages/CvPage';
import { Navigate } from 'react-router-dom';
const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '', element: <HomePage />, exact: true },
            { path: 'jobs', element: <JobPage /> },
            { path: 'cvs', element: <CvPage /> },
        ],
    },
    { path: '*', element: <Navigate to='/' /> }, // Redirect unknown paths to home
];

export default routes;
