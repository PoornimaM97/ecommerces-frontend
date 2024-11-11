import axios from 'axios';

const REST_API_BASE_USER_URL = "http://localhost:9191/api/user";

export const register = (userData) => axios.post(REST_API_BASE_USER_URL + "/register");

export const adminRegister = (userData) => axios.post(REST_API_BASE_USER_URL + "/admin");

export const login = (loginData) => axios.post(REST_API_BASE_USER_URL + "/login");

export const getUserById = (userId) => axios.get(REST_API_BASE_USER_URL + `${userId}`);