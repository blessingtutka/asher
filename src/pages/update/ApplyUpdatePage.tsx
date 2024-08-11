import { PageBanner } from '../../components/Common';
import ApplyUpdateForm from '../../components/form/AppyUpdateForm';

export default function ApplyUpdatePage() {
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
