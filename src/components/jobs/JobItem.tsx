import React from 'react';
import { Link } from 'react-router-dom';
import { Job } from '../../interfaces/detail';
import { useUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../utils/dateFormater';
import { truncater } from '../../utils/truncater';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { deleteJob } from '../../services/job.service';
import { joinUrl } from '../../utils/pathJoin';
import JobImage from '../../assets/images/about-2.jpg';
import logo from '../../assets/images/employer-logo.png';
import notify from '../../utils/notificationService';

type JobProps = {
    job: Job;
};

const JobItem: React.FC<JobProps> = ({ job }) => {
    const navigate = useNavigate();
    const { getUser } = useUser();
    const user = getUser();

    const isUserEmployer = job.employer?.userId === user?.id;

    const handleClick = () => {
        navigate(`/apply/${job.title}/${job.id}`);
    };

    const handleRemove = async () => {
        const confirmLogout = window.confirm('Are you sure you want to delete this job post?');
        if (confirmLogout) {
            try {
                await deleteJob(job.id);
                notify.success('Job deleted Successfully');
            } catch (error: any) {
                notify.error(error.message);
            }
        }
    };

    return (
        <div className='col-12 md:col-6'>
            <div className='w-full h-full mb-4 border border-gray-300 rounded-lg overflow-hidden flex flex-col'>
                <div className='relative w-full flex flex-col h-52 p-4 bg-gray-200'>
                    {isUserEmployer && (
                        <Link to={`/job/update/${job.id}`} className='actions bg-slate-300 rounded-md p-1 absolute z-10 top-2 right-2 text-xs'>
                            <FontAwesomeIcon icon={faPenToSquare} className='mr-1' /> <span className='text'>Edit</span>
                        </Link>
                    )}
                    {isUserEmployer && (
                        <button
                            onClick={handleRemove}
                            className='actions bg-red-300 hover:text-red-600 rounded-md p-1 absolute z-10 top-10 right-2 text-xs'
                        >
                            <FontAwesomeIcon icon={faTrashAlt} className='mr-1' /> <span className='text'>Delete</span>
                        </button>
                    )}
                    <img
                        src={job.image ? joinUrl(import.meta.env.VITE_UPLOAD_BASE_URL, job.image) : JobImage}
                        alt='about-2'
                        className='absolute z-0 top-0 left-0 w-full h-full object-cover'
                    />
                    <div className='w-12 h-12 relative overflow-hidden z-2 border border-primary rounded-lg'>
                        <img
                            src={job.employer?.profile ? joinUrl(import.meta.env.VITE_UPLOAD_BASE_URL, job.employer?.profile) : logo}
                            alt='log'
                            className='w-full h-full object-cover'
                        />
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
                    {job.description && <div className='editors' dangerouslySetInnerHTML={{ __html: truncater(job.description, 100) }} />}
                </div>
                <div className='flex justify-between mt-auto items-center p-4'>
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
