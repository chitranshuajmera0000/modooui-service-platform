import { apiService } from '@/services/api';
import { LoginForm, RegisterForm, LoginResponse, User } from '@/types';

export class AuthService {
  // Login user
  async login(credentials: LoginForm): Promise<LoginResponse> {
    return apiService.post<LoginResponse>('/auth/login', credentials);
  }

  // Register new user
  async register(userData: RegisterForm): Promise<LoginResponse> {
    return apiService.post<LoginResponse>('/auth/register', userData);
  }

  // Get current user profile
  async getProfile(): Promise<{ user: User }> {
    return apiService.get<{ user: User }>('/users/profile');
  }

  // Update user profile
  async updateProfile(userData: Partial<User>): Promise<{ user: User; message: string }> {
    return apiService.put<{ user: User; message: string }>('/users/profile', userData);
  }

  // Refresh token (if implemented in backend)
  async refreshToken(): Promise<LoginResponse> {
    return apiService.post<LoginResponse>('/auth/refresh');
  }
}

export const authService = new AuthService();