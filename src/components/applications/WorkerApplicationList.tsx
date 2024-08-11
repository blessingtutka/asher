import React, { useState, useEffect } from 'react';
import { Application, ApiResponse } from '../../interfaces/detail';
import { workerColumns } from './data';
import { getAuthWorkerApplications } from '../../services/apply.service';
import { DataTable } from '../list/DataTable';
import { Title } from '../Common';
import { Loading, Error } from '../Common';

const WorkerApplicationList: React.FC = () => {
    const [data, setData] = useState<Application[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result: ApiResponse<Application[]> = await getAuthWorkerApplications();
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
            <Title subtitle="job you've applied for ">My Applications</Title>
            <DataTable columns={workerColumns} data={data} />
        </div>
    );
};

export default WorkerApplicationList;
