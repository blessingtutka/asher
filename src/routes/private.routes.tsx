import EmployerProfileSetting from '../pages/create/EmployerProfile';
import EmployerProfile from '../pages/details/EmployerProfile';
import EmployerJobsPage from '../pages/list/EmployerJobsPage';
import JobPost from '../pages/create/JobPostPage';
import JobUpdate from '../pages/update/JobUpdatePage';
import WorkerProfileSetting from '../pages/create/WorkerProfile';
import WorkerProfile from '../pages/details/WorkerProfile';
import WorkerApplicationPage from '../pages/list/WorkerApplicationPage';
import ApplyPage from '../pages/ApplyPage';
import ApplyUpdatePage from '../pages/update/ApplyUpdatePage';

import ProtectedRoute from './protected.routes';

const privateRoutes = [
    { path: 'employer/profile', element: <ProtectedRoute role='EMPLOYER' element={<EmployerProfile />} /> },
    { path: 'employer/profile-setting', element: <ProtectedRoute role='EMPLOYER' element={<EmployerProfileSetting />} /> },
    { path: 'employer/jobs', element: <ProtectedRoute role='EMPLOYER' element={<EmployerJobsPage />} /> },
    { path: 'job/post', element: <ProtectedRoute role='EMPLOYER' element={<JobPost />} /> },
    { path: 'job/update/:id', element: <ProtectedRoute role='EMPLOYER' element={<JobUpdate />} /> },
    { path: 'worker/profile-setting', element: <ProtectedRoute role='WORKER' element={<WorkerProfileSetting />} /> },
    { path: 'worker/profile', element: <ProtectedRoute role='WORKER' element={<WorkerProfile />} /> },
    { path: 'worker/applications', element: <WorkerApplicationPage /> },
    { path: 'apply/:jobTitle/:jobId', element: <ProtectedRoute role='WORKER' element={<ApplyPage />} /> },
    { path: 'application/update/:appId', element: <ProtectedRoute role='WORKER' element={<ApplyUpdatePage />} /> },
];

export default privateRoutes;
