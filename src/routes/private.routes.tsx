import EmployerProfileSetting from '../pages/create/EmployerProfile';
import EmployerProfile from '../pages/details/EmployerProfile';
import EmployerJobsPage from '../pages/list/EmployerJobsPage';
import JobPost from '../pages/create/JobPostPage';
import JobUpdate from '../pages/update/JobUpdatePage';
import WorkerProfileSetting from '../pages/create/WorkerProfile';
import WorkerProfile from '../pages/details/WorkerProfile';
import ProtectedRoute from './protected.routes';

const privateRoutes = [
    { path: 'employer/profile', element: <ProtectedRoute role='EMPLOYER' element={<EmployerProfile />} /> },
    { path: 'employer/profile-setting', element: <ProtectedRoute role='EMPLOYER' element={<EmployerProfileSetting />} /> },
    { path: 'employer/jobs', element: <ProtectedRoute role='EMPLOYER' element={<EmployerJobsPage />} /> },
    { path: 'job/post', element: <ProtectedRoute role='EMPLOYER' element={<JobPost />} /> },
    { path: 'job/update/:id', element: <ProtectedRoute role='EMPLOYER' element={<JobUpdate />} /> },
    { path: 'worker/profile-setting', element: <ProtectedRoute role='WORKER' element={<WorkerProfileSetting />} /> },
    { path: 'worker/profile', element: <ProtectedRoute role='WORKER' element={<WorkerProfile />} /> },
];

export default privateRoutes;
