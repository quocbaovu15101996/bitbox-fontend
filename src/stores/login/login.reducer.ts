import { LOGIN_SUCCESS, LOG_OUT } from './login.actions';
import { Storage } from 'stores/Storage';

const initialState = {};

export const login = (state = initialState, action: LoginAction) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      const { user, jwt } = action.payload.data;
      Storage.user = user;
      Storage.accessToken = jwt;
      return {
        ...state,
        user: user,
        accessToken: jwt
      };
    }
    case LOG_OUT: {
      localStorage.clear();
      return initialState;
    }
    default:
      return state;
  }
};
