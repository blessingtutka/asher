import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Job } from '../../../interfaces/detail';
import { useSwiperSlide } from 'swiper/react';
import { joinUrl } from '../../../utils/pathJoin';
import JobImage from '../../../assets/images/about-2.jpg';
import logo from '../../../assets/images/employer-logo.png';
interface JobCardProps {
    item: Job;
    index?: number;
}

const JobCard: React.FC<JobCardProps> = ({ item }) => {
    const swiperSlide = useSwiperSlide();

    const [active, setActive] = useState(swiperSlide.isNext);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setActive(swiperSlide.isNext);
            } else {
                setActive(swiperSlide.isActive);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [swiperSlide.isNext, swiperSlide.isActive]);

    return (
        <div className={`job-card w-72 ${active ? 'active' : ''} h-96 rounded-xl overflow-hidden relative transition-all duration-100`}>
            <img
                src={item.image ? joinUrl(import.meta.env.VITE_UPLOAD_BASE_URL, item.image) : JobImage}
                alt='Background'
                className='w-full h-full object-cover absolute top-0 left-0'
            />
            <div className='flex flex-col relative z-10 p-4 h-full'>
                <div className='flex justify-between items-start'>
                    <div className='w-14 h-14 border-2 border-tertiary rounded-full overflow-hidden'>
                        <img
                            src={item.employer?.profile ? joinUrl(import.meta.env.VITE_UPLOAD_BASE_URL, item.employer?.profile) : logo}
                            alt='Background'
                            className='h-14 object-cover'
                        />
                    </div>
                </div>
                <div className='mt-auto'>
                    <Link to={`/employer/${item.employer?.id}`}>
                        <h2 className='job-company'>{item.employer?.name}</h2>
                    </Link>
                </div>
                <div className='info p-4 rounded-xl mt-auto'>
                    <Link to={`/job/${item.id}`}>
                        <h3 className='text-xl font-bold'>{item.title}</h3>
                    </Link>
                    <p className='mt-2'>${item.salary}</p>
                    <p>{item.location}</p>
                    <Link to={`/apply/${item.title}/${item.id}`} className='apply-btn relative z-10'>
                        Apply Now &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
