import ApplyForm from '../components/form/ApplyForm';
import PageBanner from '../components/Common/PageBanner';
import { useParams } from 'react-router-dom';
export default function ApplyPage() {
    const { jobTitle, jobId } = useParams<{ jobTitle: string; jobId: string }>();
    const breadcrumbs = [{ label: 'Home', href: '/' }, { label: jobTitle ?? 'Job Title' }, { label: 'Apply' }];
    return (
        <div>
            <PageBanner title={'Application'} breadcrumbs={breadcrumbs} />
            <div className='w-full flex flex-col my-5 justify-center items-center'>
                <ApplyForm jobId={jobId} />
            </div>
        </div>
    );
}
