import JobCard from './JobCard';
import { Carousel } from '../../Common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import imgP from '../../../assets/images/about-2.jpg';
import logo from '../../../assets/images/employer-logo.png';
const JobNavigation = () => (
    <div className='absolute top-0 right-[30%] md:right-5 flex gap-3'>
        <div className='swiper-button-job swiper-button-prev'>
            <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className='swiper-button-job swiper-button-next'>
            <FontAwesomeIcon icon={faChevronRight} />
        </div>
    </div>
);

const renderItem = ({ item, index }: { item: any; index: number }) => <JobCard key={index} item={item} />;

const jobs = [
    {
        companyName: 'Company A',
        jobTitle: 'Software Engineer',
        salary: '$120,000',
        location: 'New York, NY',
        imageSrc: imgP,
        logo: logo,
    },
    {
        companyName: 'Company B',
        jobTitle: 'Data Scientist',
        salary: '$110,000',
        location: 'San Francisco, CA',
        imageSrc: imgP,
        logo: logo,
    },
    {
        companyName: 'Company C',
        jobTitle: 'Product Manager',
        salary: '$130,000',
        location: 'Boston, MA',
        imageSrc: imgP,
        logo: logo,
    },
    {
        companyName: 'Company D',
        jobTitle: 'UX Designer',
        salary: '$90,000',
        location: 'Austin, TX',
        imageSrc: imgP,
        logo: logo,
    },
    {
        companyName: 'Company E',
        jobTitle: 'DevOps Engineer',
        salary: '$115,000',
        location: 'Seattle, WA',
        imageSrc: imgP,
        logo: logo,
    },
    {
        companyName: 'Company E',
        jobTitle: 'DevOps Engineer',
        salary: '$115,000',
        location: 'Seattle, WA',
        imageSrc: imgP,
        logo: logo,
    },
];

export default function JobCarousel() {
    return (
        <Carousel
            slidesPerView={'auto'}
            spaceBetween={30}
            initialSlide={2}
            centeredSlides={false}
            data={jobs}
            renderItem={renderItem}
            className='job-slider'
            navigationComponent={<JobNavigation />}
            slideToClickedSlide={true}
        />
    );
}
