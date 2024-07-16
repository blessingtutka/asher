import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
interface ModalProps {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
    icon?: React.ReactNode;
    title?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ setOpenModal, children, icon, title }) => {
    return (
        <div className='fixed z-[9999] inset-0 flex justify-center items-center bg-gray-200 bg-opacity-75'>
            <div
                className='relative w-96 max-h-[90%] rounded-lg bg-white shadow-lg flex flex-col p-6 gap-4 overflow-y-scroll overflow-x-hidden'
                id='modal'
            >
                <div className='model-head flex justify-between items-center'>
                    {(icon || title) && (
                        <div className='flex items-center gap-2'>
                            {icon && icon}
                            {title && title}
                        </div>
                    )}
                    <button
                        onClick={() => setOpenModal(false)}
                        className='flex justify-center items-center text-2xl bg-transparent border-none cursor-pointer'
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className='modal-content flex flex-col items-center justify-center'>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
