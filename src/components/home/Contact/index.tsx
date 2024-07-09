import ContactForm from './ContactForm';
import { ContactIcon } from '../../../assets/images/icons';
export default function Contact() {
    return (
        <div className='w-content my-4 bg-gray-100 shadow-md rounded-lg flex flex-col md:flex-row justify-between py-4 px-5'>
            <ContactIcon width={'50%'} />
            <ContactForm />
        </div>
    );
}
