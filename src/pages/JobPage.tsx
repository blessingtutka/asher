import Jobs from '../components/jobs/Jobs';
import PageBanner from '../components/Common/PageBanner';
export default function JobPage() {
    const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Job Offers' }];

    return (
        <div>
            <PageBanner title={'Job Offers'} breadcrumbs={breadcrumbs} />
            <div className='flex flex-col min-h-32 my-5 justify-center items-center'>
                <Jobs />
            </div>
        </div>
    );
}
