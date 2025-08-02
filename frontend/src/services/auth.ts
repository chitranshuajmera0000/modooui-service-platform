import { apiService } from './api';
import { User } from '@/types';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
  user: User;
}

interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  userType: 'customer' | 'provider';
}

interface RegisterResponse {
  access_token: string;
  user: User;
}

class AuthService {
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    try {
      return await apiService.post<LoginResponse>('/auth/login', credentials);
    } catch (error: unknown) {
      // Handle API errors gracefully
      let message = 'Login failed';
      if (error && typeof error === 'object' && 'response' in error) {
        const response = (error as { response?: { data?: { message?: string } } }).response;
        message = response?.data?.message || message;
      } else if (error instanceof Error) {
        message = error.message;
      }
      throw new Error(message);
    }
  }

  async register(userData: RegisterRequest): Promise<RegisterResponse> {
    try {
      return await apiService.post<RegisterResponse>('/auth/register', userData);
    } catch (error: unknown) {
      // Handle API errors gracefully
      let message = 'Registration failed';
      if (error && typeof error === 'object' && 'response' in error) {
        const response = (error as { response?: { data?: { message?: string } } }).response;
        message = response?.data?.message || message;
      } else if (error instanceof Error) {
        message = error.message;
      }
      throw new Error(message);
    }
  }

  async logout(): Promise<void> {
    try {
      return await apiService.post<void>('/auth/logout');
    } catch (_error) {
      // Even if logout fails on server, we should clear local state
      console.warn('Logout failed on server, but clearing local state');
    }
  }

  async refreshToken(): Promise<{ access_token: string }> {
    return apiService.post<{ access_token: string }>('/auth/refresh');
  }

  async forgotPassword(email: string): Promise<{ message: string }> {
    return apiService.post<{ message: string }>('/auth/forgot-password', { email });
  }

  async resetPassword(token: string, password: string): Promise<{ message: string }> {
    return apiService.post<{ message: string }>('/auth/reset-password', { 
      token, 
      password 
    });
  }

  async verifyEmail(token: string): Promise<{ message: string }> {
    return apiService.post<{ message: string }>('/auth/verify-email', { token });
  }

  async getCurrentUser(): Promise<User> {
    return apiService.get<User>('/auth/me');
  }
}

export const authService = new AuthService();
