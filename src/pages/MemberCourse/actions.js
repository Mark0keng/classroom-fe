import { SET_LECTURER, GET_LECTURER, SET_STUDENT, GET_STUDENT } from './constants';

export const setLecturer = (lecturer) => ({
  type: SET_LECTURER,
  lecturer,
});

export const getLecturer = (payload) => ({
  type: GET_LECTURER,
  payload,
});

export const setStudent = (students) => ({
  type: SET_STUDENT,
  students,
});

export const getStudent = (payload) => ({
  type: GET_STUDENT,
  payload,
});
