import React, { createContext, useContext, ReactNode } from 'react';
import { jwtDecode } from 'jwt-decode';

interface UserContextType {
    getUser: () => User | null;
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
    const getUser = (): User | null => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded: any = jwtDecode(token);
            return { email: decoded.email, role: decoded.role, token: token };
        }
        return null;
    };

    const contextValue = {
        getUser,
    };

    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default UserProvider;
