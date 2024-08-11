import React, { useState, useEffect } from 'react';
import { Application, ApiResponse } from '../../interfaces/detail';
import { posterColumns } from './data';
import { getAuthEmployerJobApplications } from '../../services/apply.service';
import { Loading, Error, DataTable } from '../Common';

const JobApplicationList: React.FC<{ jobId?: string }> = ({ jobId }) => {
    const [data, setData] = useState<Application[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    if (!jobId) {
        return <div>Loading...</div>;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result: ApiResponse<Application[]> = await getAuthEmployerJobApplications(jobId);
                setData(result.data);
            } catch (err) {
                setError('Failed to fetch applications');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error message={error} />;
    }

    return (
        <div className=' w-full flex flex-col justify-center items-center gap-8'>
            <DataTable columns={posterColumns} data={data} />
        </div>
    );
};

export default JobApplicationList;
