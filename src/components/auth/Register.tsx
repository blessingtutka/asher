import FormInput from '../Common/Input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/ApplicationContext';
import { useAuth } from '../../context/AuthContext';
import { registerInputs } from '../../utils/inputs';
import { register as registerService } from '../../services/auth.service';
import { useForm, SubmitHandler, FieldValues, Controller } from 'react-hook-form';
import DataSelect from '../Common/DataSelect';
import Loading from '../Common/Loading';
import notify from '../../utils/notificationService';

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();

    const { switchToSignin } = useAuth();
    const { setModalOpen } = useApp();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            setLoading(true);
            const response = await registerService(data);
            localStorage.setItem('token', response.token);
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
            localStorage.removeItem('token');
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
                    {registerInputs.map((input, index) => {
                        if (input.type == 'select') {
                            return (
                                <div key={index} className='formInput flex flex-col gap-2'>
                                    <label htmlFor={`Input${index + 1}`}>
                                        <b>{input.label}</b>
                                        {input.required && <span className=' text-red-600'>*</span>}
                                    </label>
                                    <Controller
                                        name={input.name}
                                        control={control}
                                        rules={{ required: input.required ? 'Required' : false }}
                                        render={({ field }) => (
                                            <DataSelect
                                                {...field}
                                                loadOptions={input?.options || (() => Promise.resolve([]))}
                                                placeholder={input.placeholder}
                                                onChange={(selectedOption) => field.onChange(selectedOption?.value)}
                                            />
                                        )}
                                    />
                                </div>
                            );
                        }
                        return <FormInput key={index} input={input} id={index + 1} register={register} errors={errors} />;
                    })}
                </div>
                <div className='action flex justify-between items-center'>
                    <div className='remember'>
                        <input id='remember' className=' checked:bg-primary checked:text-white mr-2' type='checkbox' />
                        <label htmlFor='remember' className='font-medium text-black'>
                            I agree to <a className='underline'>Terms & Conditions</a>
                        </label>
                    </div>
                </div>
                {loading ? (
                    <Loading />
                ) : (
                    <button type='submit' className='w-full rounded-md bg-primary p-2 text-white'>
                        sign up
                    </button>
                )}

                <div className='w-full text-center'>
                    Already have an account?{' '}
                    <span className='links font-medium' role='buttoon' onClick={switchToSignin}>
                        Sign in
                    </span>
                </div>
            </form>
        </div>
    );
}
