import { EDIT_ASSIGNMENT, GET_ASSIGNMENT } from './constants';

export const getAssignment = (assignmentId, cbFailed) => ({
  type: GET_ASSIGNMENT,
  assignmentId,
  cbFailed,
});

export const editAssignment = (payload, courseCode, assignmentId, cbSuccess, cbFailed) => ({
  type: EDIT_ASSIGNMENT,
  payload,
  courseCode,
  assignmentId,
  cbSuccess,
  cbFailed,
});
