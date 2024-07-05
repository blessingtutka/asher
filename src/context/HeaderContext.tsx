import { useContext, useState, useEffect, createContext, FC, ReactNode } from 'react';

interface HeaderContentType {
    click: boolean;
    handleClick: () => void;
    mobileNav: boolean;
}

interface HeaderContextProviderProps {
    children: ReactNode;
}

const HeaderContext = createContext<HeaderContentType | undefined>(undefined);

const useHeaderContext = () => {
    const context = useContext(HeaderContext);
    if (context === undefined) {
        throw new Error('useHeader must be used within a HeaderContextProvider');
    }
    return context;
};

const HeaderContextProvider: FC<HeaderContextProviderProps> = ({ children }) => {
    const [click, setClick] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);
    const handleClick = () => setClick(!click);
    const headerContent: HeaderContentType = {
        click,
        handleClick,
        mobileNav,
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 991) {
                setClick(false);
                setMobileNav(false);
            } else {
                setMobileNav(true);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const headerElement = document.getElementById('header');
            if (headerElement && !headerElement.contains(event.target as Node)) {
                setClick(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return <HeaderContext.Provider value={headerContent}>{children}</HeaderContext.Provider>;
};

export default HeaderContextProvider;
export { HeaderContext, useHeaderContext };
