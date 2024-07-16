import React, { useState } from 'react';
import Auth from '../../components/auth';
import Modal from '../../components/Common/Modal';
import { useApp } from '../../context/ApplicationContext';
import { AuthIcon } from '../../assets/images/icons';
import AuthProvider from '../../context/AuthContext';

const Title: React.FC<{ text: string }> = ({ text }) => <b>{text}</b>;

const AuthModal: React.FC = () => {
    const { setModalOpen } = useApp();
    const [title, setTitle] = useState('');

    function handleTitle(data: string) {
        setTitle(data);
    }

    return (
        <Modal setOpenModal={setModalOpen} icon={<AuthIcon className=' w-12 h-12' />} title={<Title text={title} />}>
            <AuthProvider>
                <Auth setTitle={handleTitle} />
            </AuthProvider>
        </Modal>
    );
};

export default AuthModal;
