import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

interface JobItem {
    companyName: string;
    jobTitle: string;
    salary: string;
    location: string;
    imageSrc?: string;
    logo?: string;
}

interface JobCardProps {
    item: JobItem;
    index?: number;
}

const JobCard: React.FC<JobCardProps> = ({ item }) => {
    const swiperSlide = useSwiperSlide();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/apply/${item.jobTitle}`);
    };
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
            <img src={item.imageSrc} alt='Background' className='w-full h-full object-cover absolute top-0 left-0' />
            <div className='flex flex-col relative z-10 p-4 h-full'>
                <div className='flex justify-between items-start'>
                    <div className='w-14 h-14 border-2 border-tertiary rounded-full overflow-hidden'>
                        <img src={item.logo} alt='Background' className='h-14 object-cover' />
                    </div>
                </div>
                <div className='mt-auto'>
                    <h2 className='text-lg text-center font-bold'>{item.companyName}</h2>
                </div>
                <div className='info p-4 rounded-xl mt-auto'>
                    <Link to={`/job/detail`}>
                        <h3 className='text-xl font-bold'>{item.jobTitle}</h3>
                    </Link>
                    <p className='mt-2'>{item.salary}</p>
                    <p>{item.location}</p>
                    <button onClick={handleClick} className='apply-btn'>
                        Apply Now &rarr;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
