import { useState, useEffect } from 'react';
import JobCard from './JobCard';
import { Carousel } from '../../Common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { getAllJobs } from '../../../services/job.service';
import { Job } from '../../../interfaces/detail';
import Loading from '../../../components/Common/Loading';
import Error from '../../../components/Common/Error';
import Empty from '../../../components/Common/Empty';

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

export default function JobCarousel() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEmployerJobs = async () => {
            try {
                const response = await getAllJobs();
                setJobs(response.data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployerJobs();
    }, []);

    return loading ? (
        <Loading className='!h-12' />
    ) : error ? (
        <Error message={error} />
    ) : jobs.length === 0 ? (
        <Empty message='No posted job yet' />
    ) : (
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
