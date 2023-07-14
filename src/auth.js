import axios from './axios';

export const login = async (username, password) => {
    try {
        const response = await axios.post('/api/login', { username, password });
        const token = response.data.token;
        localStorage.setItem('token', token);
    } catch (error) {
        throw error;
    }
};

export const checkLoggedIn = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        return false;
    }
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.exp > Date.now() / 1000;
    } catch (error) {
        return false;
    }
};

export const logout = () => {
    localStorage.removeItem('token');
};