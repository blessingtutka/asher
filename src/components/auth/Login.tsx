import FormInput from '../Common/Input';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import { loginInputs } from '../../utils/inputs';

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { switchToSignup, switchToRest } = useAuth();

    const onSubmit = (data: any) => {
        console.log(data);
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
                    <a href='javascript: void(0)' className='forgot links font-semibold' onClick={switchToRest}>
                        forget password?
                    </a>
                </div>
                <button type='submit' className='w-full rounded-md bg-primary p-2 text-white'>
                    sign in
                </button>
                <div className='w-full text-center'>
                    Don't have an account?
                    <a href='javascript: void(0)' className='links font-medium' onClick={switchToSignup}>
                        Sign Up
                    </a>
                </div>
            </form>
        </div>
    );
}
