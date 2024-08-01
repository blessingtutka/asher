import React, { createContext, useContext, ReactNode } from 'react';
import { jwtDecode } from 'jwt-decode';
import useLocalStorage from '../hooks/useLocaleStorage';

interface UserContextType {
    getUser: () => User | null;
    removeToken: () => void;
    setToken: (newToken: string) => void;
}

interface User {
    id: string;
    email: string;
    role: string;
    token: string;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

interface UserProviderProps {
    children?: ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [token, setToken] = useLocalStorage('token');

    const removeToken = () => {
        setToken(null);
    };

    const getUser = (): User | null => {
        if (token) {
            const decoded: any = jwtDecode(token);
            return { id: decoded.userId, email: decoded.email, role: decoded.role, token: token };
        }
        return null;
    };

    const contextValue = {
        getUser,
        removeToken,
        setToken,
    };

    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default UserProvider;
