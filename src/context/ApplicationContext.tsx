import { useContext, useState, useEffect, createContext, FC, ReactNode, Dispatch, SetStateAction } from 'react';

interface AppContentType {
    modalOpen: boolean;
    handleModal: () => void;
    setModalOpen: Dispatch<SetStateAction<boolean>>;
}

interface AppContextProviderProps {
    children: ReactNode;
}

const AppContext = createContext<AppContentType | undefined>(undefined);

const useApp = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useApp must be used within an AppContextProvider');
    }
    return context;
};

const AppContextProvider: FC<AppContextProviderProps> = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleModal = () => setModalOpen(true);
    const appContent: AppContentType = {
        modalOpen,
        handleModal,
        setModalOpen,
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const modalElement = document.getElementById('modal');
            if (modalElement && !modalElement.contains(event.target as Node)) {
                setModalOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return <AppContext.Provider value={appContent}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
export { AppContext, useApp };
