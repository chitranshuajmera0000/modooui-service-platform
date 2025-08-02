import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// Base API configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Helper function to get token from localStorage
const getAuthToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const authStorage = localStorage.getItem('auth-storage');
    if (authStorage) {
      const parsed = JSON.parse(authStorage);
      return parsed.state?.token || null;
    }
  } catch (error) {
    console.error('Error getting auth token:', error);
  }
  return null;
};

class ApiService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Request interceptor to add auth token
    this.client.interceptors.request.use(
      (config) => {
        const token = getAuthToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          // Clear auth storage on 401
          if (typeof window !== 'undefined') {
            localStorage.removeItem('auth-storage');
            window.location.href = '/login';
          }
        }
        return Promise.reject(error);
      }
    );
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(url, config);
    return response.data;
  }

  async post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.post<T>(url, data, config);
    return response.data;
  }

  async put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.put<T>(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.delete<T>(url, config);
    return response.data;
  }
}

export const apiService = new ApiService();