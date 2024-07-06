import React from 'react';
import ServiceItem from './ServiceItem';
import { Service1, Service2, Service3, Service4 } from '../../../assets/images/icons';
import serviceImage1 from '../../../assets/images/service-1.jpg';
import serviceImage2 from '../../../assets/images/service-2.jpg';
import serviceImage3 from '../../../assets/images/service-3.jpg';
import serviceImage4 from '../../../assets/images/service-4.jpg';
// Interfaces
interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string;
}

const Services: React.FC = () => {
    const services: Service[] = [
        {
            icon: <Service1 width={40} height={40} />,
            title: 'Advertise a job',
            description: 'Allows employers to post job vacancies on a platform, making them visible to potential candidates.',
            image: serviceImage1,
        },
        {
            icon: <Service2 width={40} height={40} />,
            title: 'Cv search',
            description: 'Enables recruiters to search a database of candidate resumes (CVs) to find individuals who match specific job criteria.',
            image: serviceImage2,
        },
        {
            icon: <Service3 width={40} height={40} />,
            title: 'Display jobs',
            description: 'Showcases available job openings and allow job seekers to apply for positions that match their skills and interests',
            image: serviceImage3,
        },
        {
            icon: <Service4 width={40} height={40} />,
            title: 'Recruiter profiles',
            description:
                'Offers detailed profiles for recruiters helping job seekers connect with knowledgeable recruiters who can assist them in their job search',
            image: serviceImage4,
        },
    ];

    return (
        <div className='row'>
            {services.map((service, index) => (
                <ServiceItem key={index} title={service.title} description={service.description} icon={service.icon} image={service.image} />
            ))}
        </div>
    );
};

export default Services;
