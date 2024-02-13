import { SET_MEMBER, GET_MEMBER, DELETE_MEMBER } from './constants';

export const setMember = (member) => ({
  type: SET_MEMBER,
  member,
});

export const getMember = (courseCode, cbFailed) => ({
  type: GET_MEMBER,
  courseCode,
  cbFailed,
});

export const deleteMember = (studentId, courseCode, cbSuccess, cbFailed) => ({
  type: DELETE_MEMBER,
  studentId,
  courseCode,
  cbSuccess,
  cbFailed,
});
