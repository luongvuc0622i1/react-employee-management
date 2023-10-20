import Axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const apiService = Axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
});

export const login = (username, password) => {
  return apiService.post('/login', { 'username': username, "password": password });
};

export const getAllUsers = () => {
  let token = localStorage.getItem('token');
  return apiService.get('/employees', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getUserInfo = () => {
  let id = localStorage.getItem('id');
  let token = localStorage.getItem('token');
  return apiService.get('/profile/' + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};