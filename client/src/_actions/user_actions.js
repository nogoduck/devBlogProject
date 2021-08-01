import axios from 'axios';
import { SIGNIN_USER, SIGNUP_USER, AUTH_USER } from './types';

export function signupUser(onSubmitData) {
  const request = axios
    .post('/api/users/signup', onSubmitData, { withCredentials: true })
    .then((res) => res.data);

  return {
    type: SIGNUP_USER,
    payload: request,
  };
}

export function signinUser(onSubmitData) {
  const request = axios
    .post('/api/users/signin', onSubmitData, { withCredentials: true })
    .then((res) => res.data);

  return {
    type: SIGNIN_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios
    .get('/api/users/auth', { withCredentials: true })
    .then(({ data }) => {
      // console.log("[Redux] auth data >> ", data);
      return data;
    });

  return {
    type: AUTH_USER,
    payload: request,
  };
}
