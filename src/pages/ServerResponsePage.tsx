import { useLocation } from 'react-router-dom';
import PageBanner from '../components/Common/PageBanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

interface ServerPageProps {
    code?: number;
    message?: string;
}

export default function ServerPage() {
    const location = useLocation();
    const { code, message } = location.state as ServerPageProps;
    const breadcrumbs = [{ label: 'Home', href: '/' }, { label: `${code || 'Error'}` }];

    return (
        <div>
            <PageBanner title={`Error ${code ? code : ''}`} breadcrumbs={breadcrumbs} />
            <div className='w-full flex flex-col gap-5 my-5 justify-center items-center'>
                <FontAwesomeIcon icon={faTriangleExclamation} className='text-7xl text-primary' />
                <h1 className='text-3xl font-semibold text-primary'>{code ? `Error ${code}` : 'Error'}</h1>
                <p className='text-xl font-medium text-secondary'>{message || 'An error occurred'}</p>
            </div>
        </div>
    );
}
