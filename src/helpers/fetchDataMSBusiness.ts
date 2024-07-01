import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_MICROSERVICES_BUSINESS_RAPPI,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

const fetchDataMSBusiness = async (url: string, options: AxiosRequestConfig = {}): Promise<any> => {
    try {
        const response: AxiosResponse = await axiosInstance(url, options);
        return response.data;
    } catch (error: any) {
        throw new Error('Could not get data', error);
    }
};

export default fetchDataMSBusiness;
