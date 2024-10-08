import WorkerForm from '../../components/form/WorkerForm';
import { PageBanner } from '../../components/Common';

export default function WorkerProfileSetting() {
    const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'profile' }];
    return (
        <div>
            <PageBanner title={'Worker Profile'} breadcrumbs={breadcrumbs} />
            <div className='w-full flex flex-col my-5 justify-center items-center'>
                <WorkerForm />
            </div>
        </div>
    );
}
