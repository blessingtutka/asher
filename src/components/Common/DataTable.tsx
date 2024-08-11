import React from 'react';
import DataTableComponent, { TableColumn } from 'react-data-table-component';

interface DataTableProps {
    columns: TableColumn<any>[];
    data: any[];
}

export const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
    return <DataTableComponent columns={columns} data={data} pagination className='mytable' />;
};
