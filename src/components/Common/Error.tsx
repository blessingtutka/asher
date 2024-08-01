import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export default function Error({ message }: { message: string }) {
    return (
        <div>
            <div className='w-full h-full flex flex-col gap-5 justify-center items-center flex-grow p-3'>
                <FontAwesomeIcon icon={faExclamationTriangle} className='text-6xl text-red-600' />
                <p className='text-center text-red-600'>{message}</p>
            </div>
        </div>
    );
}
