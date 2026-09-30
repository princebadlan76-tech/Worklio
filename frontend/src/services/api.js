import axios from 'axios';

// Backend Vercel URL
const API = axios.create({
  baseURL: 'https://worklio-backend-mxa3.vercel.app/api',
});

// Pass JWT token in headers for protected routes
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
