import axios from '../axios';
import { Job } from '../interfaces/detail';
import { AxiosResponse } from 'axios';
import { convertToFormData } from '../utils/formData';

interface ApiResponse<T> {
    status: string;
    message: string;
    data: T;
    status_code: number;
}

export const getJob = async (id: string): Promise<ApiResponse<Job>> => {
    try {
        const response: AxiosResponse<ApiResponse<Job>> = await axios.get(`/job/${id}`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error?.message || 'Error fetching job');
    }
};

export const getAllJobs = async (): Promise<ApiResponse<Job[]>> => {
    try {
        const response: AxiosResponse<ApiResponse<Job[]>> = await axios.get('/job');
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error?.message || 'Error fetching jobs');
    }
};

export const getAuthEmployerJobs = async (): Promise<ApiResponse<Job[]>> => {
    try {
        const response: AxiosResponse<ApiResponse<Job[]>> = await axios.get('/job/employer');
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error?.message || 'Error fetching employer jobs');
    }
};

export const createJob = async (jobData: Partial<Job>): Promise<ApiResponse<Job>> => {
    try {
        const formData = convertToFormData(jobData);
        const response: AxiosResponse<ApiResponse<Job>> = await axios.post('/job/create', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error?.message || 'Error creating job');
    }
};

export const updateJob = async (id: string, jobData: Partial<Job>): Promise<ApiResponse<Job>> => {
    try {
        const formData = convertToFormData(jobData);
        const response: AxiosResponse<ApiResponse<Job>> = await axios.put(`/job/update/${id}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error?.message || 'Error updating job');
    }
};

export const deleteJob = async (id: string): Promise<ApiResponse<Job>> => {
    try {
        const response: AxiosResponse<ApiResponse<Job>> = await axios.delete(`/job/delete/${id}`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error?.message || 'Error deleting job');
    }
};

export const searchJobs = async (name: string, category: string): Promise<ApiResponse<Job[]>> => {
    try {
        const response: AxiosResponse<ApiResponse<Job[]>> = await axios.get('/job/search', {
            params: { name, category },
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error?.message || 'Error searching jobs');
    }
};
