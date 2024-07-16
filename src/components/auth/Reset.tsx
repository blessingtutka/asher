import FormInput from '../Common/Input';
import { useAuth } from '../../context/AuthContext';
import { useForm } from 'react-hook-form';
import { resetInputs } from '../../utils/inputs';

export default function Reset() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { switchToSignin } = useAuth();
    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
        <div className='login w-full flex flex-col gap-5'>
            <div className='title'>
                <p className='text-[#626262]'>Reset your password to regain access to your account and exclusive features</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-4'>
                <div className='w-full flex flex-col gap-4'>
                    {resetInputs.map((input, index) => (
                        <FormInput key={index} input={input} id={index + 1} register={register} errors={errors} />
                    ))}
                </div>
                <button type='submit' className='w-full rounded-md bg-primary p-2 text-white'>
                    Send Reset Link
                </button>
                <div className='w-full text-center'>
                    Already have an account?
                    <a href='#' className='links font-medium' role='button' onClick={switchToSignin}>
                        Sign in
                    </a>
                </div>
            </form>
        </div>
    );
}
