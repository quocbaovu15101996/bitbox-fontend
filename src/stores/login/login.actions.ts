import { Storage } from 'stores/Storage';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOG_OUT = 'LOG_OUT';

export const loginSuccess = (data: ResponseLogin) => {
  return {
    type: LOGIN_SUCCESS,
    payload: { data }
  };
};

export const logOut = () => {
  Storage.user = undefined;
  return {
    type: LOG_OUT
  };
};
