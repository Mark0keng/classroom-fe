import { SET_MEMBER, GET_MEMBER } from './constants';

export const setMember = (member) => ({
  type: SET_MEMBER,
  member,
});

export const getMember = (courseCode, cbFailed) => ({
  type: GET_MEMBER,
  courseCode,
  cbFailed,
});
