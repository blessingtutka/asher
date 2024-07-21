import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';
import CvPage from './pages/CvPage';
import JobDetailPage from './pages/details/JobDetailPage';
import WorkerDetailPage from './pages/details/WorkerDetailPage';
import ApplyPage from './pages/ApplyPage';
import JobPost from './pages/create/JobPostPage';
import WorkerProfile from './pages/create/WorkerProfile';
import EmployerProfile from './pages/create/EmployerProfile';
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
            { path: 'apply/:jobTitle', element: <ApplyPage /> },
            { path: 'job/post', element: <JobPost /> },
            { path: 'employer/profile', element: <EmployerProfile /> },
            { path: 'worker/profile', element: <WorkerProfile /> },
        ],
    },
    { path: '*', element: <Navigate to='/' /> }, // Redirect unknown paths to home
];

export default routes;
