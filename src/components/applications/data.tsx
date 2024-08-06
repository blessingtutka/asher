import { Link, useNavigate } from 'react-router-dom';
import { TableColumn } from 'react-data-table-component';
import { Application } from '../../interfaces/detail';
import { formatDate } from '../../utils/dateFormater';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheckToSlot, faBan, faArrowRotateForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteApplication, updateApplicationStatus } from '../../services/apply.service';
import notify from '../../utils/notificationService';

interface UpdateStatusParams {
    id: string;
    status: 'PENDING' | 'REJECTED' | 'ACCEPTED';
}

const handleRemove = async (appId: string, navigate: ReturnType<typeof useNavigate>) => {
    const confirmLogout = window.confirm('Are you sure you want to delete this application?');
    if (confirmLogout) {
        try {
            await deleteApplication(appId);
            navigate(0);
            notify.success('Application deleted successfully');
        } catch (error: any) {
            notify.error(error.message);
        }
    }
};

const handleStatus = async (appId: string, status: 'PENDING' | 'REJECTED' | 'ACCEPTED', navigate: ReturnType<typeof useNavigate>) => {
    const confirmLogout = window.confirm('Are you sure you want to update this application status?');
    if (confirmLogout) {
        try {
            const args: UpdateStatusParams = { id: appId, status: status };
            navigate(0);
            await updateApplicationStatus(args);
            notify.success('Application status updated successfully');
        } catch (error: any) {
            notify.error(error.message);
        }
    }
};

export const workerColumns: TableColumn<Application>[] = [
    {
        name: 'Job',
        selector: (row) => row.job.title,
        sortable: true,
        width: '200px',
        cell: (row) => (
            <Link to={`/job/${row.job.id}`} className='table-link'>
                {row.job.title}
            </Link>
        ),
    },
    {
        name: 'My Portfolio',
        selector: (row) => row.cv || 'No Portfolio',
        sortable: true,
        width: '200px',
        cell: (row) =>
            row.link ? (
                <Link to={row.link} className='table-link'>
                    My Portfolio link
                </Link>
            ) : (
                'No Portfolio'
            ),
    },
    {
        name: 'Date',
        selector: (row) => row.date,
        sortable: true,
        width: '250px',
        cell: (row) => <>{formatDate(row.date)}</>,
    },
    {
        name: 'My Resume',
        selector: (row) => row.cv || 'No Resume',
        sortable: true,
        width: '200px',
        cell: (row) =>
            row.cv ? (
                <Link to={row.cv} className='table-link'>
                    My Resume link
                </Link>
            ) : (
                'No Resume'
            ),
    },
    {
        name: 'Motivation Letter',
        selector: (row) => row.motivation || 'No Motivation',
        sortable: true,
        width: '200px',
        cell: (row) =>
            row.motivation ? (
                <Link to={row.motivation} className='table-link'>
                    My Letter link
                </Link>
            ) : (
                'No Motivation'
            ),
    },
    {
        name: 'Application Status',
        selector: (row) => row.status || 'Pending',
        sortable: true,
        width: '200px',
        cell: (row) =>
            row.status == 'ACCEPTED' ? (
                <span className='text-green-500'>ACCEPTED</span>
            ) : row.status == 'REJECTED' ? (
                <span className='text-red-500'>REJECTED</span>
            ) : (
                <span className='text-gray-500'>PENDING</span>
            ),
    },
    {
        name: 'Operations',
        selector: (row) => row.id,
        width: '100px',
        cell: (row) => {
            const navigate = useNavigate();

            return (
                <div className='flex space-x-2'>
                    {row.status == 'PENDING' && (
                        <Link to={`/application/update/${row.id}`} className='table-action update'>
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </Link>
                    )}

                    <button onClick={() => handleRemove(row.id, navigate)} className='table-action delete'>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                </div>
            );
        },
    },
];

export const posterColumns: TableColumn<Application>[] = [
    {
        name: 'Appliant',
        selector: (row) => `${row.worker.lastName || 'Worker'} ${row.worker.firstName || ''}`,
        sortable: true,
        width: '200px',
        cell: (row) => (
            <Link to={`/worker/${row.workerId}`} className='table-link'>
                {`${row.worker.lastName || 'Worker'} ${row.worker.firstName || ''}`}
            </Link>
        ),
    },
    {
        name: 'Date',
        selector: (row) => row.date,
        sortable: true,
        width: '250px',
        cell: (row) => <>{formatDate(row.date)}</>,
    },
    {
        name: 'Portfolio',
        selector: (row) => row.cv || 'No Portfolio',
        sortable: true,
        width: '200px',
        cell: (row) =>
            row.link ? (
                <Link to={row.link} className='table-link'>
                    Portfolio link
                </Link>
            ) : (
                'No Portfolio'
            ),
    },
    {
        name: 'Resume',
        selector: (row) => row.cv || 'No Resume',
        sortable: true,
        width: '200px',
        cell: (row) =>
            row.cv ? (
                <Link to={row.cv} className='table-link'>
                    Resume
                </Link>
            ) : (
                'No Resume'
            ),
    },
    {
        name: 'Motivation Letter',
        selector: (row) => row.motivation || 'No Motivation',
        sortable: true,
        width: '200px',
        cell: (row) =>
            row.motivation ? (
                <Link to={row.motivation} className='table-link'>
                    Motivation
                </Link>
            ) : (
                'No Motivation'
            ),
    },
    {
        name: 'Application Status',
        selector: (row) => row.status || 'Pending',
        sortable: true,
        width: '200px',
        cell: (row) =>
            row.status == 'ACCEPTED' ? (
                <span className='text-green-500'>ACCEPTED</span>
            ) : row.status == 'REJECTED' ? (
                <span className='text-red-500'>REJECTED</span>
            ) : (
                <span className='text-gray-500'>PENDING</span>
            ),
    },
    {
        name: 'Operations',
        selector: (row) => row.id,
        width: '200px',
        cell: (row) => {
            const navigate = useNavigate();
            return (
                <div className='flex space-x-2'>
                    <button onClick={() => handleStatus(row.id, 'ACCEPTED', navigate)} className='table-action accept'>
                        <FontAwesomeIcon icon={faCheckToSlot} />
                    </button>
                    <button onClick={() => handleStatus(row.id, 'REJECTED', navigate)} className='table-action reject'>
                        <FontAwesomeIcon icon={faBan} />
                    </button>
                    <button onClick={() => handleStatus(row.id, 'PENDING', navigate)} className='table-action unset'>
                        <FontAwesomeIcon icon={faArrowRotateForward} />
                    </button>
                </div>
            );
        },
    },
];
