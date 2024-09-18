import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Cache system using interceptors
api.interceptors.response.use(
  (response) => {
    // Cache response or handle additional logic here
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
