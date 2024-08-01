import FormInput from '../Common/Input';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useApp } from '../../context/ApplicationContext';
import { useUser } from '../../context/UserContext';
import { loginInputs } from '../../utils/inputs';
import { login as loginService } from '../../services/auth.service';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import Loading from '../Common/Loading';
import notify from '../../utils/notificationService';

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const { setModalOpen } = useApp();
    const { switchToSignup, switchToRest } = useAuth();
    const { setToken, removeToken } = useUser();
    const [loading, setLoading] = useState(false);

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            setLoading(true);
            const response = await loginService(data.email, data.password);
            setToken(response.token);
            if (response?.role === 'EMPLOYER') {
                navigate('/employer/jobs');
            } else if (response?.role === 'WORKER') {
                navigate('/worker/applications');
            } else {
                navigate('/');
            }
            setModalOpen(false);
            notify.success('Login Successfully');
        } catch (error: any) {
            removeToken();
            notify.error(error.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='login w-full flex flex-col gap-5'>
            <div className='title'>
                <p className='text-[#626262]'>Login to your account - enjoy exclusive features & many more</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-4'>
                <div className='w-full flex flex-col gap-4'>
                    {loginInputs.map((input, index) => (
                        <FormInput key={index} input={input} id={index + 1} register={register} errors={errors} />
                    ))}
                </div>
                <div className='action flex justify-between items-center'>
                    <div className='remember'>
                        <input id='remember' className=' checked:bg-primary checked:text-white mr-2' type='checkbox' />
                        <label htmlFor='remember' className='font-medium'>
                            Remember me
                        </label>
                    </div>
                    <span className='forgot links font-semibold' onClick={switchToRest}>
                        forget password?
                    </span>
                </div>

                {loading ? (
                    <Loading />
                ) : (
                    <button type='submit' disabled={loading} className='auth-btn'>
                        sign in
                    </button>
                )}

                <div className='w-full text-center'>
                    Don't have an account?
                    <span className='links font-medium' onClick={switchToSignup}>
                        Sign Up
                    </span>
                </div>
            </form>
        </div>
    );
}
