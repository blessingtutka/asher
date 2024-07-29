import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useApp } from '../context/ApplicationContext';
import notify from '../utils/notificationService';

interface ProtectedRouteProps {
    role: string;
    element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ role, element }) => {
    const { getUser } = useUser();
    const { setModalOpen } = useApp();
    const user = getUser();

    if (!user || !user.token) {
        setModalOpen(true);
        notify.warning('You are not logged in');
        return <Navigate to={'/server'} state={{ code: 401, message: 'Unauthorized: Please log in.' }} />;
    }

    if (user.role !== role) {
        setModalOpen(true);
        notify.error("You can't access this page");
        return <Navigate to={'/server'} state={{ code: 403, message: 'Forbidden: You do not have permission to access this page.' }} />;
    }

    return element;
};

export default ProtectedRoute;
