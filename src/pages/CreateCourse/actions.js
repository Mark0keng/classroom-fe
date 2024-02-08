import { CREATE_COURSE } from './constants';

export const createCourse = (payload, cbSuccess, cbFailed) => ({
  type: CREATE_COURSE,
  payload,
  cbSuccess,
  cbFailed,
});
