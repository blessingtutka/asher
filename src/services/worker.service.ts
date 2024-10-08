import axiosClient from '../axios';
import { AxiosResponse } from 'axios';
import { Worker } from '../interfaces/detail';
import { convertToFormData } from '../utils/formData';

interface ApiResponse<T> {
    status: string;
    message: string;
    data: T;
    status_code: number;
}

export const getAllWorkers = async (): Promise<ApiResponse<Worker[]>> => {
    try {
        const response: AxiosResponse<ApiResponse<Worker[]>> = await axiosClient.get(`worker/list`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error?.message || 'Error fetching workers');
    }
};

export const getWorkerProfile = async (workerId: string): Promise<ApiResponse<Worker>> => {
    try {
        const response: AxiosResponse<ApiResponse<Worker>> = await axiosClient.get(`worker/profile/${workerId}`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error?.message || 'Error fetching worker profile');
    }
};

export const getAuthWorkerProfile = async (): Promise<ApiResponse<Worker>> => {
    try {
        const response: AxiosResponse<ApiResponse<Worker>> = await axiosClient.get('worker/profile');
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error?.message || 'Error fetching authenticated worker profile ' + error);
    }
};

export const setWorkerProfile = async (workerData: Partial<Worker>): Promise<ApiResponse<Worker>> => {
    try {
        const formData = convertToFormData(workerData);
        const response: AxiosResponse<ApiResponse<Worker>> = await axiosClient.put('worker/profile-setting', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error?.message || 'Error setting worker profile');
    }
};

export const deleteWorkerProfile = async (): Promise<ApiResponse<null>> => {
    try {
        const response: AxiosResponse<ApiResponse<null>> = await axiosClient.delete('/profile-setting');
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error?.message || 'Error deleting worker profile');
    }
};

export const searchWorkers = async (name: string, title: string): Promise<ApiResponse<Worker[]>> => {
    try {
        const response: AxiosResponse<ApiResponse<Worker[]>> = await axiosClient.get('/worker/search', {
            params: { name, title },
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error?.message || 'Error searching workers');
    }
};
