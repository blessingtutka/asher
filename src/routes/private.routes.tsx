import EmployerProfileSetting from '../pages/create/EmployerProfile';
import EmployerProfile from '../pages/details/EmployerProfile';
import WorkerProfile from '../pages/create/WorkerProfile';
import ProtectedRoute from './protected.routes';

const privateRoutes = [
    { path: 'employer/profile', element: <ProtectedRoute role='EMPLOYER' element={<EmployerProfile />} /> },
    { path: 'employer/profile-setting', element: <ProtectedRoute role='EMPLOYER' element={<EmployerProfileSetting />} /> },
    { path: 'worker/profile', element: <ProtectedRoute role='WORKER' element={<WorkerProfile />} /> },
];

export default privateRoutes;
