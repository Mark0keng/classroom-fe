import { JOIN_COURSE } from './constants';

export const joinCourse = (payload, cbSuccess, cbFailed) => ({
  type: JOIN_COURSE,
  payload,
  cbSuccess,
  cbFailed,
});
