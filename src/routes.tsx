import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';
import CvPage from './pages/CvPage';
import JobDetailPage from './pages/details/JobDetailPage';
import WorkerDetailPage from './pages/details/WorkerDetailPage';
import { Navigate } from 'react-router-dom';
const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '', element: <HomePage />, exact: true },
            { path: 'jobs', element: <JobPage /> },
            { path: 'cvs', element: <CvPage /> },
            { path: 'job/:jobId', element: <JobDetailPage /> },
            { path: 'worker/:workerId', element: <WorkerDetailPage /> },
        ],
    },
    { path: '*', element: <Navigate to='/' /> }, // Redirect unknown paths to home
];

export default routes;
