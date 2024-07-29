import React, { createContext, useContext, ReactNode, useState, useCallback } from 'react';
import { jwtDecode } from 'jwt-decode';

interface UserContextType {
    getUser: () => User | null;
    removeUser: () => void;
    setToken: (newToken: string | null) => void;
}

interface User {
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
    const [token, setTokenState] = useState<string | null>(localStorage.getItem('token'));

    const setToken = useCallback((newToken: string | null) => {
        setTokenState(newToken);
        if (newToken) {
            localStorage.setItem('token', newToken);
        } else {
            localStorage.removeItem('token');
        }
    }, []);

    const removeUser = useCallback(() => {
        setToken(null);
    }, [setToken]);

    const getUser = (): User | null => {
        if (token) {
            const decoded: any = jwtDecode(token);
            return { email: decoded.email, role: decoded.role, token: token };
        }
        return null;
    };

    const contextValue = {
        getUser,
        removeUser,
        setToken,
    };

    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default UserProvider;
