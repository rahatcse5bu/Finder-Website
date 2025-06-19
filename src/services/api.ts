import axios, { AxiosResponse } from 'axios';
import {
  ApiResponse,
  PaginatedResponse,
  User,
  Post,
  Transaction,
  Notification,
  LoginCredentials,
  RegisterData,
  PostFilters,
  TeacherFilters,
  DashboardData
} from '../types';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: async (credentials: LoginCredentials): Promise<ApiResponse<{ user: User; token: string }>> => {
    const response: AxiosResponse<ApiResponse<{ user: User; token: string }>> = await api.post('/auth/login', credentials);
    return response.data;
  },

  register: async (data: RegisterData): Promise<ApiResponse<{ user: User; token: string }>> => {
    const response: AxiosResponse<ApiResponse<{ user: User; token: string }>> = await api.post('/auth/register', data);
    return response.data;
  },

  getMe: async (): Promise<ApiResponse<{ user: User }>> => {
    const response: AxiosResponse<ApiResponse<{ user: User }>> = await api.get('/auth/me');
    return response.data;
  },

  updateProfile: async (data: Partial<User>): Promise<ApiResponse<{ user: User }>> => {
    const response: AxiosResponse<ApiResponse<{ user: User }>> = await api.put('/auth/profile', data);
    return response.data;
  },

  changePassword: async (data: { currentPassword: string; newPassword: string }): Promise<ApiResponse<{}>> => {
    const response: AxiosResponse<ApiResponse<{}>> = await api.put('/auth/change-password', data);
    return response.data;
  },

  logout: async (): Promise<ApiResponse<{}>> => {
    const response: AxiosResponse<ApiResponse<{}>> = await api.post('/auth/logout');
    return response.data;
  }
};

// Posts API
export const postsAPI = {
  getPosts: async (filters: PostFilters = {}): Promise<PaginatedResponse<Post>> => {
    const response: AxiosResponse<PaginatedResponse<Post>> = await api.get('/posts', { params: filters });
    return response.data;
  },

  getPost: async (id: string): Promise<ApiResponse<{ post: Post }>> => {
    const response: AxiosResponse<ApiResponse<{ post: Post }>> = await api.get(`/posts/${id}`);
    return response.data;
  },

  createPost: async (data: Partial<Post>): Promise<ApiResponse<{ post: Post }>> => {
    const response: AxiosResponse<ApiResponse<{ post: Post }>> = await api.post('/posts', data);
    return response.data;
  },

  updatePost: async (id: string, data: Partial<Post>): Promise<ApiResponse<{ post: Post }>> => {
    const response: AxiosResponse<ApiResponse<{ post: Post }>> = await api.put(`/posts/${id}`, data);
    return response.data;
  },

  deletePost: async (id: string): Promise<ApiResponse<{}>> => {
    const response: AxiosResponse<ApiResponse<{}>> = await api.delete(`/posts/${id}`);
    return response.data;
  },

  viewContact: async (id: string): Promise<ApiResponse<{ contactInfo: any; transaction: any }>> => {
    const response: AxiosResponse<ApiResponse<{ contactInfo: any; transaction: any }>> = await api.post(`/posts/${id}/contact`);
    return response.data;
  },

  toggleFavorite: async (id: string): Promise<ApiResponse<{ isFavorited: boolean; favoritesCount: number }>> => {
    const response: AxiosResponse<ApiResponse<{ isFavorited: boolean; favoritesCount: number }>> = await api.post(`/posts/${id}/favorite`);
    return response.data;
  },

  getMyPosts: async (filters: { page?: number; limit?: number; status?: string } = {}): Promise<PaginatedResponse<Post>> => {
    const response: AxiosResponse<PaginatedResponse<Post>> = await api.get('/posts/user/my-posts', { params: filters });
    return response.data;
  }
};

// Users API
export const usersAPI = {
  getUserProfile: async (id: string): Promise<ApiResponse<{ user: User & { postsCount: number; recentPosts: Post[] } }>> => {
    const response: AxiosResponse<ApiResponse<{ user: User & { postsCount: number; recentPosts: Post[] } }>> = await api.get(`/users/profile/${id}`);
    return response.data;
  },

  getTeachers: async (filters: TeacherFilters = {}): Promise<PaginatedResponse<User>> => {
    const response: AxiosResponse<PaginatedResponse<User>> = await api.get('/users/teachers', { params: filters });
    return response.data;
  },

  addReview: async (userId: string, data: { rating: number; comment?: string }): Promise<ApiResponse<{ user: User }>> => {
    const response: AxiosResponse<ApiResponse<{ user: User }>> = await api.post(`/users/${userId}/review`, data);
    return response.data;
  },

  getFavorites: async (filters: { page?: number; limit?: number } = {}): Promise<PaginatedResponse<Post>> => {
    const response: AxiosResponse<PaginatedResponse<Post>> = await api.get('/users/favorites', { params: filters });
    return response.data;
  },

  getDashboard: async (): Promise<ApiResponse<DashboardData>> => {
    const response: AxiosResponse<ApiResponse<DashboardData>> = await api.get('/users/dashboard');
    return response.data;
  },

  searchUsers: async (filters: { q: string; type?: string; page?: number; limit?: number }): Promise<PaginatedResponse<User>> => {
    const response: AxiosResponse<PaginatedResponse<User>> = await api.get('/users/search', { params: filters });
    return response.data;
  }
};

// Payments API
export const paymentsAPI = {
  initiateRecharge: async (data: { amount: number; paymentMethod: string }): Promise<ApiResponse<{ transaction: any; payment: any }>> => {
    const response: AxiosResponse<ApiResponse<{ transaction: any; payment: any }>> = await api.post('/payments/recharge', data);
    return response.data;
  },

  getTransactions: async (filters: { page?: number; limit?: number; type?: string; status?: string } = {}): Promise<PaginatedResponse<Transaction>> => {
    const response: AxiosResponse<PaginatedResponse<Transaction>> = await api.get('/payments/transactions', { params: filters });
    return response.data;
  },

  getTransaction: async (id: string): Promise<ApiResponse<{ transaction: Transaction }>> => {
    const response: AxiosResponse<ApiResponse<{ transaction: Transaction }>> = await api.get(`/payments/transaction/${id}`);
    return response.data;
  },

  verifyPayment: async (transactionId: string): Promise<ApiResponse<{ transaction: Transaction }>> => {
    const response: AxiosResponse<ApiResponse<{ transaction: Transaction }>> = await api.post('/payments/verify', { transactionId });
    return response.data;
  }
};

// Notifications API
export const notificationsAPI = {
  getNotifications: async (filters: { page?: number; limit?: number; unreadOnly?: boolean } = {}): Promise<PaginatedResponse<Notification> & { unreadCount: number }> => {
    const response: AxiosResponse<PaginatedResponse<Notification> & { unreadCount: number }> = await api.get('/notifications', { params: filters });
    return response.data;
  },

  markAsRead: async (id: string): Promise<ApiResponse<{}>> => {
    const response: AxiosResponse<ApiResponse<{}>> = await api.put(`/notifications/${id}/read`);
    return response.data;
  },

  markAllAsRead: async (): Promise<ApiResponse<{}>> => {
    const response: AxiosResponse<ApiResponse<{}>> = await api.put('/notifications/read-all');
    return response.data;
  },

  deleteNotification: async (id: string): Promise<ApiResponse<{}>> => {
    const response: AxiosResponse<ApiResponse<{}>> = await api.delete(`/notifications/${id}`);
    return response.data;
  }
};

export default api;
