import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Mousewheel, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper/core';
import 'swiper/css';
// import 'swiper/css/navigation';

SwiperCore.use([Navigation, Pagination, Keyboard, Mousewheel, Autoplay]);

const DefaultNavigation = () => (
    <>
        <div className='swiper-button-prev absolute left-5 top-[45%] z-10  text-white text-xl font-bold rounded-full px-3 py-1 bg-black-50'>
            <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className='swiper-button-next absolute right-5 top-[45%] z-10 text-white text-xl font-bold rounded-full px-3 py-1 bg-black-50'>
            <FontAwesomeIcon icon={faChevronRight} />
        </div>
    </>
);

interface NavigationComponentProps {
    nextEl?: string;
    prevEl?: string;
    enabled?: boolean;
}

interface CarouselProps extends SwiperProps {
    modules?: any[];
    effect?: string;
    data?: any[];
    className?: string;
    navigationComponent?: React.ReactNode;
    renderItem: ({ item, index }: { item: any; index: number }) => React.ReactNode;
    navigation?: NavigationComponentProps;
    [key: string]: any;
}

const Carousel: React.FC<CarouselProps> = ({
    modules = [],
    effect = '',
    data = [],
    className = '',
    navigationComponent = <DefaultNavigation />,
    renderItem,
    navigation = {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        enabled: true,
    },
    ...otherProps
}) => {
    const swiperRef = useRef<any>(null);

    return (
        <div className='carousel-container relative pt-16'>
            <Swiper
                ref={swiperRef}
                modules={modules}
                effect={effect}
                grabCursor
                centeredSlides
                loop
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                keyboard={{ enabled: true }}
                mousewheel={{ thresholdDelta: 70 }}
                navigation={navigation}
                className={`${className}`}
                {...otherProps}
            >
                {data.map((item, index) => {
                    return (
                        <SwiperSlide key={index} className='relative !w-fit'>
                            {renderItem({ item, index })}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            {navigation.enabled ? navigationComponent : ''}
        </div>
    );
};

export default Carousel;
