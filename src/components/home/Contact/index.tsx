import ContactForm from './ContactForm';
import { ContactIcon } from '../../../assets/images/icons';
export default function Contact() {
    return (
        <div className='w-content overflow-hidden my-4 bg-gray-100 shadow-md rounded-lg flex flex-col md:flex-row justify-center md:justify-between py-4 px-5'>
            <ContactIcon className='w-full md:w-1/2' />
            <ContactForm />
        </div>
    );
}
