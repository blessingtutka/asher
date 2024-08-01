import React from 'react';
import { Link } from 'react-router-dom';
import { Job } from '../../interfaces/detail';
import { useUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../utils/dateFormater';
import { truncater } from '../../utils/truncater';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import JobImage from '../../assets/images/about-2.jpg';
import logo from '../../assets/images/employer-logo.png';

type JobProps = {
    job: Job;
};

const JobItem: React.FC<JobProps> = ({ job }) => {
    const navigate = useNavigate();
    const { getUser } = useUser();
    const user = getUser();

    const handleClick = () => {
        navigate(`/apply/${job.title}/${job.id}`);
    };

    return (
        <div className='col-12 md:col-6'>
            <div className='w-full mb-4 border border-gray-300 rounded-lg overflow-hidden flex flex-col justify-between'>
                <div className='relative w-full flex flex-col h-52 p-4 bg-gray-200'>
                    {user && (
                        <Link to={`/job/update/${job.id}`} className='links bg-slate-300 rounded-md p-1 absolute z-10 top-2 right-2 text-xs'>
                            <FontAwesomeIcon icon={faPenToSquare} className='mr-1' /> Edit
                        </Link>
                    )}
                    <img src={job.image ? job.image : JobImage} alt='about-2' className='absolute z-0 top-0 left-0 w-full h-full object-cover' />
                    <div className='w-12 h-12 relative overflow-hidden z-2 border border-primary rounded-lg'>
                        <img src={job.employer?.profile ? job.employer?.profile : logo} alt='log' className='w-full h-full object-cover' />
                    </div>
                    <div className='w-full relative z-2 mt-auto pb-4'>
                        <Link to={`/employer/${job.employer?.id}`}>
                            <h3 className='job-company'>{job?.employer?.name || 'Employer'}</h3>
                        </Link>
                    </div>
                </div>
                <div className='p-4'>
                    <Link to={`/job/${job.id}`} className='flex justify-between items-center'>
                        <div>
                            <h2 className='text-lg mb-2'>{job.title}</h2>
                            {job.status == 'CLOSE' ? (
                                <span className='w-fit text-sm p-1 rounded-md bg-red-200 text-red-700'>CLosed</span>
                            ) : (
                                <span className='w-fit text-sm p-1 rounded-md bg-green-200 text-green-700'>Opened</span>
                            )}
                        </div>
                        {job.createdAt && <span className='w-fit text-sm p-1 rounded-md text-gray-500'>{formatDate(job.createdAt)}</span>}
                    </Link>
                    {job.description && <p className='text-gray-500 text-sm'>{truncater(job.description, 200)}</p>}
                </div>
                <div className='flex justify-between items-center p-4'>
                    <div className='text-lg text-primary'>${job.salary ? job.salary : 'N/A'}</div>
                    <button onClick={handleClick} className='main-btn'>
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobItem;
