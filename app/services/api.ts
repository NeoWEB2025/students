import axios from 'axios';
import Cookies from 'js-cookie';

class ApiService {
    private static instance: ApiService;
    private token: string | null = null;

    private constructor() {
        if (typeof window !== 'undefined') {
            this.token = Cookies.get('token') || null;
        }
    }

    public static getInstance(): ApiService {
        if (!ApiService.instance) {
            ApiService.instance = new ApiService();
        }
        return ApiService.instance;
    }

    public setToken(token: string) {
        this.token = token;
        if (typeof window !== 'undefined') {
            Cookies.set('token', token, { expires: 1 });
        }
    }

    public clearToken() {
        this.token = null;
        if (typeof window !== 'undefined') {
            Cookies.remove('token');
        }
    }

    public createApi(baseURL: string) {
        const api = axios.create({
            baseURL,
            withCredentials: true
        });

        api.interceptors.request.use((config) => {
            if (this.token) {
                config.headers.Authorization = `Bearer ${this.token}`;
            }
            return config;
        });

        api.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response?.status === 401) {
                    this.clearToken();
                    if (typeof window !== 'undefined') {
                        window.location.href = '/login';
                    }
                }
                return Promise.reject(error);
            }
        );

        return api;
    }
}

export const apiService = ApiService.getInstance(); 