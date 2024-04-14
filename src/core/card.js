import axios from "axios";
import { API_BASE_URL } from './config';

// Reusable Axios instance with a base URL
const api = axios.create({
    baseURL: API_BASE_URL,
});

export const cardData = async () => {
    try {
        localStorage.removeItem('token');
        const response = await api.get("/api/v1.0/specializations/by_interests/", {});
        return response.data;
    } catch (error) {
        throw error;
    }
};
