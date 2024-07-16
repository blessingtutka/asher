import FormInput from '../Common/Input';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import { registerInputs } from '../../utils/inputs';

export default function Register() {
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
                <p className='text-[#626262]'>Login to your account - enjoy exclusive features & many more</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-4'>
                <div className='w-full flex flex-col gap-4'>
                    {registerInputs.map((input, index) => (
                        <FormInput key={index} input={input} id={index + 1} register={register} errors={errors} />
                    ))}
                </div>
                <div className='action flex justify-between items-center'>
                    <div className='remember'>
                        <input id='remember' className=' checked:bg-primary checked:text-white mr-2' type='checkbox' />
                        <label htmlFor='remember' className='font-medium text-black'>
                            I agree to <a className='underline'>Terms & Conditions</a>
                        </label>
                    </div>
                </div>
                <button type='submit' className='w-full rounded-md bg-primary p-2 text-white'>
                    sign up
                </button>
                <div className='w-full text-center'>
                    Already have an account?{' '}
                    <a href='#' className='links font-medium' role='buttoon' onClick={switchToSignin}>
                        Sign in
                    </a>
                </div>
            </form>
        </div>
    );
}
