import { request } from './request';

export const submitLogin = (email: string, password: string) =>
  request<any>('post', '/api/auth/local', {
    identifier: email,
    password
  });
