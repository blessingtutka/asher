import ApplyUpdateForm from '../../components/form/AppyUpdateForm';
import PageBanner from '../../components/Common/PageBanner';

export default function JobUpdate() {
    const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Update Job' }];
    return (
        <div>
            <PageBanner title={'Application Update'} breadcrumbs={breadcrumbs} />
            <div className='w-full flex flex-col my-5 justify-center items-center'>
                <ApplyUpdateForm />
            </div>
        </div>
    );
}
