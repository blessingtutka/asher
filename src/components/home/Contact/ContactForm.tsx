import React from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

type FormData = {
    email: string;
    phone: string;
    address: string;
    message: string;
};

const ContactForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <div className='w-full flex-1 p-8 rounded-lg'>
            <h2 className='text-sm mb-1'>Contact Information</h2>
            <h3 className='text-3xl font-bold mb-6'>
                Let Your Wanderlust <span className='text-tertiary'>Guide You</span>
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className='contact space-y-4'>
                <div className='relative'>
                    <input
                        {...register('email', { required: 'Email is required' })}
                        type='email'
                        placeholder='Your Email'
                        className='w-full p-4 pr-10 border rounded-4xl'
                    />
                    <FontAwesomeIcon icon={faEnvelope} className='absolute right-6 top-5 text-primary' />
                    {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                </div>
                <div className='relative'>
                    <input {...register('phone')} type='tel' placeholder='Your Phone' className='w-full p-4 pr-10 border rounded-4xl' />
                    <FontAwesomeIcon icon={faPhone} className='absolute right-6 top-5 text-primary' />
                    {errors.phone && <p className='text-red-600'>{errors.phone.message}</p>}
                </div>
                <div className='relative'>
                    <input {...register('address')} type='text' placeholder='Your Address' className='w-full p-4 pr-10 border rounded-4xl' />
                    <FontAwesomeIcon icon={faMapMarkerAlt} className='absolute right-6 top-5 text-primary' />
                    {errors.address && <p className='text-red-600'>{errors.address.message}</p>}
                </div>
                <div>
                    <textarea
                        {...register('message', { required: 'Message is required' })}
                        placeholder='Write Message..'
                        className='w-full p-4 border rounded-3xl'
                    />
                    {errors.message && <p className='text-red-600'>{errors.message.message}</p>}
                </div>
                <button type='submit' className='submit-btn py-2 rounded-4xl'>
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
