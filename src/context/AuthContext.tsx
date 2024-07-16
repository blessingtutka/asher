/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
    switchToSignup: () => void;
    switchToSignin: () => void;
    switchToRest: () => void;
    isExpanded: boolean;
    active: string;
}

const initialState: AuthContextType = {
    switchToSignup: () => {},
    switchToSignin: () => {},
    switchToRest: () => {},
    isExpanded: false,
    active: 'signin',
};

const AuthContext = createContext<AuthContextType>(initialState);

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
    children?: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState('signin');

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(
            () => {
                setExpanded(false);
            },
            2.3 * 1000 - 1500,
        );
    };

    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive('signup');
        }, 400);
    };

    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive('signin');
        }, 400);
    };

    const switchToRest = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive('reset');
        }, 400);
    };

    const contextValue = {
        switchToSignup,
        switchToSignin,
        switchToRest,
        isExpanded,
        active,
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
