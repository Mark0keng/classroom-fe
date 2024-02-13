import {
  DELETE_ASSIGNMENT,
  GET_DETAIL_ASSIGNMENT,
  SET_DETAIL_ASSIGNMENT,
  SET_FILE_SUBMIT,
  SUBMIT_ASSIGNMENT,
} from './constants';

export const setDetailAssignment = (assignment) => ({
  type: SET_DETAIL_ASSIGNMENT,
  assignment,
});

export const setFileSubmit = (fileSubmit, cbSuccess, cbFailed) => ({
  type: SET_FILE_SUBMIT,
  fileSubmit,
  cbSuccess,
  cbFailed,
});

export const getDetailAssignment = (dataUser, assignmentId, cbFailed) => ({
  type: GET_DETAIL_ASSIGNMENT,
  dataUser,
  assignmentId,
  cbFailed,
});

export const submitAssignment = (payload, cbFailed) => ({
  type: SUBMIT_ASSIGNMENT,
  payload,
  cbFailed,
});

export const deleteAssignment = (assignmentId, cbSuccess) => ({
  type: DELETE_ASSIGNMENT,
  assignmentId,
  cbSuccess,
});
