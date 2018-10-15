import axios from 'axios';
export const HOST = 'http://localhost:3000';
export const API = '/API';
export const POST_USER_REGISTER = '/users/register';
export const GET_USER_VALIDATE_MAIL = '/users/validate/mail';
export const POST_USER_LOGIN = '/users/login';

export const registerUser = (payload) => {
  return axios.post(HOST+API+POST_USER_REGISTER, payload);
}

export const validateUser = (token) => {
  return axios.get(HOST+API+GET_USER_VALIDATE_MAIL+'/'+token );
}

export const loginUser = (username, password) => {
  return axios.post(HOST+API+POST_USER_LOGIN, { username, password });
}