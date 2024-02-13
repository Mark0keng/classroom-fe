import { SET_COURSE } from '@pages/Course/constants';
import { DELETE_COURSE, GET_COURSE_ASSIGNMENT, SET_COURSE_ASSIGNMENT } from './constants';

export const setCourseAssignment = (assignments) => ({
  type: SET_COURSE_ASSIGNMENT,
  assignments,
});

export const setCourse = (course) => ({
  type: SET_COURSE,
  course,
});

export const getCourseAssignment = (courseCode, cbFailed) => ({
  type: GET_COURSE_ASSIGNMENT,
  courseCode,
  cbFailed,
});

export const editCourse = (payload, courseId, cbSuccess) => ({
  type: DELETE_COURSE,
  payload,
  courseId,
  cbSuccess,
});

export const deleteCourse = (courseId, cbSuccess) => ({
  type: DELETE_COURSE,
  courseId,
  cbSuccess,
});
