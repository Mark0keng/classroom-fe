import { JOIN_COURSE } from './constants';

export const joinCourse = (payload, courseCode, cbSuccess, cbFailed) => ({
  type: JOIN_COURSE,
  payload,
  courseCode,
  cbSuccess,
  cbFailed,
});
