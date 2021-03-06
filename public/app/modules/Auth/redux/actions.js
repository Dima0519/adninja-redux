import { createAction } from 'redux-actions';
import { push } from 'react-router-redux';
import AuthService from '../../../services/AuthService';

// signin
export const AUTH_SIGNIN_REQUEST = 'auth/signin/request';
export const AUTH_SIGNIN_SUCCESS = 'auth/signin/succes';
export const AUTH_SIGNIN_ERROR = 'auth/signin/error';

export const authSigninRequest = createAction(AUTH_SIGNIN_REQUEST, (authData) => {
  return (dispatch, getState) => {
    const authService = new AuthService(dispatch, getState());
    authService.signin(authData, {
      SUCCESS: AUTH_SIGNIN_SUCCESS,
      ERROR: AUTH_SIGNIN_ERROR
    }).then(() => {
      dispatch(push('/'));
    });
  };
});

// signout
export const AUTH_SIGNOUT_REQUEST = 'auth/signout/request';
export const AUTH_SIGNOUT_SUCCESS = 'auth/signout/succes';
export const AUTH_SIGNOUT_ERROR = 'auth/signout/error';

export const authSignoutRequest = createAction(AUTH_SIGNOUT_REQUEST, () => {
  return (dispatch, getState) => {
    const authService = new AuthService(dispatch, getState());
    authService.signout({
      SUCCESS: AUTH_SIGNOUT_SUCCESS,
      ERROR: AUTH_SIGNOUT_ERROR
    }).then(() => {
      dispatch(push('/login'));
    });
  };
});

export default {
  authSigninRequest,
  authSignoutRequest
};
