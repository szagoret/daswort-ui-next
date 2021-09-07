import { REMOVE_AUTH, SET_AUTH } from './type';

export const setAuth = (jwt, expiration) => ({
  type: SET_AUTH,
  payload: {
    jwt,
    expiration
  }
});

export const removeAuth = () => ({
  type: REMOVE_AUTH
});
