import axios from 'lib/cilent';

export const register = ({ username, password }) =>
  axios.post('/api/auth/register', { username, password });

export const login = ({ username, password }) =>
  axios.post('/api/auth/login', { username, password });

export const checkAuth = () => axios.get('/api/auth/check');

export const refeshToken = () => axios.post('/api/auth/refresh-token');

export const logout = () => axios.post('/api/auth/logout');
