import { SET_LOGIN, SET_PROFILE, SET_TOKEN } from '@containers/Client/constants';

export const setLogin = (login) => ({
  type: SET_LOGIN,
  login,
});

export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  profile,
});
