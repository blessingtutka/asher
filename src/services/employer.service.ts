import axios from '../axios';
import { AxiosResponse } from 'axios';

interface Employer {
    id: string;
    name: string;
}

interface ApiResponse<T> {
    status: string;
    message: string;
    data: T;
    status_code: number;
}

// Services
export const getEmployerProfile = async (empId: string): Promise<ApiResponse<Employer>> => {
    try {
        const response: AxiosResponse<ApiResponse<Employer>> = await axios.get(`/employer/${empId}`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error?.message || 'Error fetching employer profile');
    }
};

export const getYourEmployerProfile = async (): Promise<ApiResponse<Employer>> => {
    try {
        const response: AxiosResponse<ApiResponse<Employer>> = await axios.get('/employer/profile');
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error?.message || 'Error fetching employer profile ' + error);
    }
};

export const setEmployerProfile = async (employerData: Partial<Employer>): Promise<ApiResponse<Employer>> => {
    try {
        const response: AxiosResponse<ApiResponse<Employer>> = await axios.put('/employer/profile-setting', employerData);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error?.message || 'Error setting employer profile');
    }
};
