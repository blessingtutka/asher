import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useApp } from '../context/ApplicationContext';
import notify from '../utils/notificationService';
import axios from '../axios';

interface ProtectedRouteProps {
    role: string;
    element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ role, element }) => {
    const { getUser, removeToken } = useUser();
    const { setModalOpen } = useApp();
    const navigate = useNavigate();
    const user = getUser();

    useEffect(() => {
        axios.interceptors.request.use((config) => {
            if (user?.token) {
                config.headers.Authorization = `Bearer ${user.token}`;
            }
            return config;
        });

        axios.interceptors.response.use(
            (response) => response,
            (error) => {
                const originalRequest = error.config;

                if (error.response.status === 401 && !originalRequest._retry) {
                    removeToken();
                    setModalOpen(true);
                    navigate('/');
                }

                if (error.response.status === 403) {
                    setModalOpen(true);
                    navigate('/');
                }

                return Promise.reject(error);
            },
        );
    }, [user, removeToken]);

    if (!user || !user.token) {
        setModalOpen(true);
        notify.warning('You are not logged in');
        return null;
    }

    if (user.role !== role) {
        setModalOpen(true);
        notify.error("You can't access this page");
        return null;
    }

    return element;
};

export default ProtectedRoute;
