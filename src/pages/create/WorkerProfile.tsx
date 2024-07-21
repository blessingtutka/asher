import WorkerForm from '../../components/form/WorkerForm';
import PageBanner from '../../components/Common/PageBanner';
export default function WorkerProfile() {
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
