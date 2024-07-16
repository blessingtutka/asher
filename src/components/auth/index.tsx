import React, { useEffect } from 'react';
import Login from './Login';
import Register from './Register';
import Reset from './Reset';
import BackDrop from '../Common/Backdrop';
import { useAuth } from '../../context/AuthContext';

const Auth: React.FC<{ setTitle: (title: string) => void }> = ({ setTitle }) => {
    const { isExpanded, active } = useAuth();

    useEffect(() => {
        if (active == 'signin') setTitle('Sign In');
        else if (active == 'signup') setTitle('Sign Up');
        else if (active == 'reset') setTitle('Reset');
        else setTitle('Auth');
    }, [active]);

    return (
        <div className={`overflow-x-hidden`}>
            <BackDrop isExpanded={isExpanded} />
            <div className='w-full'>
                {active === 'signin' && <Login />}
                {active === 'signup' && <Register />}
                {active === 'reset' && <Reset />}
            </div>
        </div>
    );
};

export default Auth;
