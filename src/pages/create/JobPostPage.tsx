import JobPostForm from '../../components/form/JobPostForm';
import { PageBanner } from '../../components/Common';

export default function JobPost() {
    const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Post a Job' }];
    return (
        <div>
            <PageBanner title={'Post Job'} breadcrumbs={breadcrumbs} />
            <div className='w-full flex flex-col my-5 justify-center items-center'>
                <JobPostForm />
            </div>
        </div>
    );
}
