// src/services/workerService.ts
import axiosClient from '../axios';
import { AxiosResponse } from 'axios';

interface Worker {
    id: string;
    userId: string;
    name: string;
}

interface ApiResponse<T> {
    status: string;
    message: string;
    data: T;
    status_code: number;
}

export const getWorkerProfile = async (workerId: string): Promise<ApiResponse<Worker>> => {
    try {
        const response: AxiosResponse<ApiResponse<Worker>> = await axiosClient.get(`/profile/${workerId}`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error?.message || 'Error fetching worker profile');
    }
};

export const getAuthWorkerProfile = async (): Promise<ApiResponse<Worker>> => {
    try {
        const response: AxiosResponse<ApiResponse<Worker>> = await axiosClient.get('/profile');
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error?.message || 'Error fetching authenticated worker profile ' + error);
    }
};

export const setWorkerProfile = async (workerData: Partial<Worker>): Promise<ApiResponse<Worker>> => {
    try {
        const response: AxiosResponse<ApiResponse<Worker>> = await axiosClient.put('/profile-setting', workerData);
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
