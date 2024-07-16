import LoginIcon from '../../../assets/images/icons/arrow-align-right.svg?react';
import { useApp } from '../../../context/ApplicationContext';
export default function Buttons() {
    const { handleModal } = useApp();
    return (
        <button className='btn main-btn order-3 flex gap-1' onClick={handleModal}>
            <LoginIcon className='*:stroke-white text-white' /> Login
        </button>
    );
}
