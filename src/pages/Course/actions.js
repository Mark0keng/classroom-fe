import { GET_COURSE, SET_COURSE } from './constants';

export const setCourse = (courses) => ({
  type: SET_COURSE,
  courses,
});

export const getCourse = (userData) => ({
  type: GET_COURSE,
  userData,
});
