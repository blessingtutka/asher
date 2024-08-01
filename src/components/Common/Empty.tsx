import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderBlank } from '@fortawesome/free-regular-svg-icons';

export default function Empty({ message }: { message: string }) {
    return (
        <div>
            <div className='w-full h-full flex flex-col gap-5 justify-center items-center flex-grow p-3'>
                <FontAwesomeIcon icon={faFolderBlank} className='text-6xl text-gray-600' />
                <p className='text-center text-gray-600'>{message}</p>
            </div>
        </div>
    );
}
