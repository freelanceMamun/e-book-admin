import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (data: { email: string; password: string }) => {
  return api.post('/api/user/login', data);
};

export const register = async (data: {
  email: string;
  password: string;
  name: string;
}) => {
  return api.post('/api/user/register', data);
};

export const getBooksall = async (data: any) => {
  return api.get('/api/books', data);
};
