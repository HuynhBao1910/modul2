import axios from 'axios';

// Set default base URL for axios requests
axios.defaults.baseURL = 'http://localhost:3000';

// Set default headers for axios requests
axios.defaults.headers.common['Content-Type'] = 'application/json';

// Add interceptor to add token to header of axios requests
axios.interceptors.request.use(
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

export default axios;