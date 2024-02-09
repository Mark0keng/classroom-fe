import { CREATE_ASSIGNMENT } from './constants';

export const createAssignment = (payload, courseCode, cbSuccess, cbFailed) => ({
  type: CREATE_ASSIGNMENT,
  payload,
  courseCode,
  cbSuccess,
  cbFailed,
});
