import axios from "axios";
import { API_BASE_URL } from './config';

// Reusable Axios instance with a base URL
const api = axios.create({
  baseURL: API_BASE_URL,
});

export const login = async (email, password) => {
  try {
    const response = await api.post("/api/v1.0/users/auth/login", { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (email, password, confirm_password) => {
  try {
    const response = await api.post("/api/v1/users", { email, password, confirm_password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = async (token) => {
  try {
    localStorage.removeItem('token');
    const response = await api.post("/users/auth/logout", {}, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const checkAuth = async (token) => {
  try {
    const response = await api.post("/users/auth/check", {}, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
  } catch (error) {
    throw error;
  }
};
