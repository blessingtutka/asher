// src/services/application.service.ts

import axios from '../axios';
import { AxiosResponse } from 'axios';
import { Application } from '../interfaces/detail';
import { convertToFormData } from '../utils/formData';

interface ApiResponse<T> {
    status: string;
    message: string;
    data: T;
    status_code: number;
}

export const getApplication = async (id: string): Promise<ApiResponse<Application>> => {
    try {
        const response: AxiosResponse<ApiResponse<Application>> = await axios.get(`/apply/${id}`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error?.message || 'Error fetching application');
    }
};

export const getAllApplications = async (): Promise<ApiResponse<Application[]>> => {
    try {
        const response: AxiosResponse<ApiResponse<Application[]>> = await axios.get('/apply');
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error?.message || 'Error fetching applications');
    }
};

export const getAuthWorkerApplications = async (): Promise<ApiResponse<Application[]>> => {
    try {
        const response: AxiosResponse<ApiResponse<Application[]>> = await axios.get('/apply/worker');
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error?.message || 'Error fetching worker applications');
    }
};

export const getAuthEmployerJobApplications = async (jobId: string): Promise<ApiResponse<Application[]>> => {
    try {
        const response: AxiosResponse<ApiResponse<Application[]>> = await axios.get(`/apply/employer/${jobId}`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error?.message || 'Error fetching job applications');
    }
};

export const createApplication = async (applicationData: Partial<Application>): Promise<ApiResponse<Application>> => {
    try {
        const formData = convertToFormData(applicationData);
        const response: AxiosResponse<ApiResponse<Application>> = await axios.post('/apply/create', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error?.message || 'Error creating application');
    }
};

export const updateApplication = async (id: string, applicationData: Partial<Application>): Promise<ApiResponse<Application>> => {
    try {
        const formData = convertToFormData(applicationData);
        const response: AxiosResponse<ApiResponse<Application>> = await axios.put(`/apply/update/${id}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error?.message || 'Error updating application');
    }
};

interface UpdateStatusParams {
    id: string;
    status: 'PENDING' | 'REJECTED' | 'ACCEPTED';
}

export const updateApplicationStatus = async (params: UpdateStatusParams): Promise<ApiResponse<Application>> => {
    try {
        const response: AxiosResponse<ApiResponse<Application>> = await axios.patch(`/apply/change/${params.id}/status`, { status: params.status });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error?.message || 'Error updating application status');
    }
};

export const deleteApplication = async (id: string): Promise<ApiResponse<Application>> => {
    try {
        const response: AxiosResponse<ApiResponse<Application>> = await axios.delete(`/apply/delete/${id}`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error?.message || 'Error deleting application');
    }
};
