import { REGISTER, SET_DATA, SET_STEP } from './constants';

export const setStep = (step) => ({
  type: SET_STEP,
  step,
});

export const setData = (data) => ({
  type: SET_DATA,
  data,
});

export const register = (payload, cbSuccess, cbFailed) => ({
  type: REGISTER,
  payload,
  cbSuccess,
  cbFailed,
});
