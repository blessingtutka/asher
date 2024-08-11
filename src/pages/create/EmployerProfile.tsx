import EmployerForm from '../../components/form/EmployerForm';
import { PageBanner } from '../../components/Common';

export default function EmployerProfile() {
    const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'profile' }];
    return (
        <div>
            <PageBanner title={'Employer Profile'} breadcrumbs={breadcrumbs} />
            <div className='w-full flex flex-col my-5 justify-center items-center'>
                <EmployerForm />
            </div>
        </div>
    );
}
