import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

interface ServiceProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    image: string;
}

const ServiceItem: React.FC<ServiceProps> = ({ title, description, icon, image }) => {
    return (
        <div className='col-12 md:col-6 p-2'>
            <div className='flex flex-col md:flex-row items-center p-4 rounded-[20px] gap-4 mlg:gap-7 bordered border-bord'>
                <div className='w-full md:w-2/5 h-52 rounded-[20px] bg-gray-100 overflow-hidden object-cover'>
                    <img src={image} alt={title} className='w-full h-full object-cover' />
                </div>

                <div className='w-full md:w-3/5'>
                    <h3 className='text-xl text-primary font-semibold mb-3'>{title}</h3>
                    <p className='text-content'>{description}</p>
                    <div className='icons flexed-space my-3'>
                        <div className='h-10 w-10 rounded-[10px] bordered border-secondary text-secondary flexed'>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </div>
                        {icon}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;
