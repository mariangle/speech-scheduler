import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { IUser } from '@/types';

class AuthService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'https://localhost:7232/api',
    });
  }

  async login(username: string, password: string): Promise<string> {
    try {
      const response: AxiosResponse = await this.api.post('/login', { username, password });
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

  async register(username: string, name: string, password: string): Promise<IUser> {
    try {
      const response: AxiosResponse = await this.api.post('/register', { username, name, password });
      return response.data;
    } catch (error: any) {
      return error.response.data;
    }
  }
}

export default AuthService;