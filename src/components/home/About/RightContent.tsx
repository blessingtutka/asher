import React from 'react';
import Title from './Title';
import Action from './Action';
import { Text } from '../../Common';
const Right: React.FC = () => {
    return (
        <div className='w-full h-full md:w-1/2 mlg:w-3/5 flex flex-col'>
            <Title />
            <Text>
                Welcome to Asher, your premier job portal designed to connect employers and job seekers seamlessly. At Asher, we believe in creating
                opportunities and building careers by providing a platform where employers can post job listings and find the perfect candidates,
                while job seekers can explore a myriad of opportunities and apply for jobs that match their skills and aspirations.
                <br />
                Join Asher today and take the next step in your career journey. Whether you're looking to hire top talent or find your dream job,
                Asher is here to make the connection.
            </Text>
            <Action />
        </div>
    );
};

export default Right;
