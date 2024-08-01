import HomePage from '../pages/HomePage';
import JobPage from '../pages/JobPage';
import CvPage from '../pages/CvPage';
import JobDetailPage from '../pages/details/JobDetailPage';
import EmployerDetailPage from '../pages/details/EmployerDetailPage';
import WorkerDetailPage from '../pages/details/WorkerDetailPage';
import ApplyPage from '../pages/ApplyPage';
import ServerPage from '../pages/ServerResponsePage';

const publicRoutes = [
    { path: '', element: <HomePage />, exact: true },
    { path: 'jobs', element: <JobPage /> },
    { path: 'cvs', element: <CvPage /> },
    { path: 'job/:jobId', element: <JobDetailPage /> },
    { path: 'worker/:workerId', element: <WorkerDetailPage /> },
    { path: 'employer/:empId', element: <EmployerDetailPage /> },
    { path: 'apply/:jobTitle/:jobId', element: <ApplyPage /> },
    { path: 'server', element: <ServerPage /> },
];

export default publicRoutes;
