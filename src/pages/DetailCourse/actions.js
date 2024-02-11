import { SET_ASSIGNMENT, GET_ASSIGNMENT } from './constants';

export const setAssignment = (assignments) => ({
  type: SET_ASSIGNMENT,
  assignments,
});

export const getAssignment = (courseCode, cbFailed) => ({
  type: GET_ASSIGNMENT,
  courseCode,
  cbFailed,
});
