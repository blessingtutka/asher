import avatar from '../../../assets/images/avatar.png';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../../context/UserContext';
import { motion, AnimatePresence } from 'framer-motion';

interface AvatarProps {
    email?: string;
    role?: string;
}

const Avatar: React.FC<AvatarProps> = ({ email, role }) => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const { removeToken } = useUser();

    const handleLogout = () => {
        const confirmLogout = window.confirm('Are you sure you want to log out?');
        if (confirmLogout) {
            removeToken();
            navigate('/');
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const modalElement = document.getElementById('avatar');
            if (modalElement && !modalElement.contains(event.target as Node)) {
                setShow(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='avatar relative order-3 flex gap-1' id='avatar'>
            <button onClick={() => setShow(!show)}>
                <img src={avatar} className='w-11 h-11 rounded-full' />
            </button>
            <AnimatePresence>
                {show && (
                    <motion.div
                        className='dropdown avatar-dropdown z-[101]'
                        id='dropdown'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <li>
                            <span className='dropdown-item'>{email || 'Anonymouse'}</span>
                        </li>
                        <li>
                            <hr className='dropdown-divider' />
                        </li>
                        <li className='link'>
                            <Link className='dropdown-item' to={`/${role === 'EMPLOYER' ? 'employer' : role === 'WORKER' ? 'worker' : ''}/profile`}>
                                {`My Profile`}
                            </Link>
                        </li>
                        {role === 'EMPLOYER' ? (
                            <li className='link'>
                                <Link className='dropdown-item' to='/employer/jobs'>
                                    My Jobs
                                </Link>
                            </li>
                        ) : (
                            <li className='link'>
                                <Link className='dropdown-item' to='/employer/applications'>
                                    My Application
                                </Link>
                            </li>
                        )}
                        <li>
                            <hr className='dropdown-divider' />
                        </li>
                        <li className='link'>
                            <span className='dropdown-item' onClick={handleLogout}>
                                Signout
                            </span>
                        </li>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Avatar;
