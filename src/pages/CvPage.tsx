import Cvs from '../components/cvs/Cvs';
import PageBanner from '../components/Common/PageBanner';
export default function CvPage() {
    const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'CV Search' }];
    return (
        <div>
            <PageBanner title={'CV Search'} breadcrumbs={breadcrumbs} />
            <div className='flex flex-col my-5 justify-center items-center'>
                <Cvs />
            </div>
        </div>
    );
}
