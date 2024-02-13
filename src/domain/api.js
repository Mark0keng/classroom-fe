import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  ping: 'ping.json',
  login: 'login',
  register: 'register',
  createCourse: 'course/create',
  getCourseByCode: 'course',
  updateCourse: 'course/update',
  deleteCourse: 'course/delete',
  getCourseMember: 'course',
  deleteCourseMember: 'student-course',
  joinCourse: 'student-course/join',
  getStudentCourse: 'student',
  getLecturerCourse: 'lecturer',
  getAssignmentById: 'assignment',
  createAssignment: 'assignment/create',
  deleteAssignment: 'assignment/delete',
  updateAssignment: 'assignment/update',
  getCourseAssignment: 'assignment/course',
  getStudentAssignment: 'student-assignment',
  createStudentAssignment: 'student-assignment/create',
  submitStudentAssignment: 'student-assignment/submit',
};

export const callAPI = async (endpoint, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/json; charset=UTF-8',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    url: config.api.host + endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};

export const ping = () => callAPI(urls.ping, 'get');
export const login = (payload) => callAPI(urls.login, 'post', {}, {}, payload);
export const register = (payload) => callAPI(urls.register, 'post', {}, {}, payload);
export const joinCourse = (payload) => callAPI(urls.joinCourse, 'post', {}, {}, payload);
export const createCourse = (payload) => callAPI(urls.createCourse, 'post', {}, {}, payload);
export const getCourseByCode = (courseCode) => callAPI(`${urls.getCourseByCode}/${courseCode}`, 'get');
export const updateCourse = (payload, courseId) => callAPI(`${urls.updateCourse}/${courseId}`, 'put', {}, {}, payload);
export const deleteCourse = (courseId) => callAPI(`${urls.deleteCourse}/${courseId}`, 'delete');

export const getCourseMember = (courseId) => callAPI(`${urls.getCourseByCode}/${courseId}/get-member`, 'get');
export const deleteCourseMember = (studentId, courseId) =>
  callAPI(`${urls.deleteCourseMember}/student/${studentId}/course/${courseId}`, 'delete');

export const getStudentCourse = (studentId) => callAPI(`${urls.getStudentCourse}/${studentId}/get-course`, 'get');
export const getLecturerCourse = (lecturerId) => callAPI(`${urls.getLecturerCourse}/${lecturerId}/get-course`, 'get');

export const getAssignmentById = (assignmentId) => callAPI(`${urls.getAssignmentById}/${assignmentId}`, 'get');
export const createAssignment = (payload) => callAPI(urls.createAssignment, 'post', {}, {}, payload);
export const updateAssignment = (payload, assignmentId) =>
  callAPI(`${urls.updateAssignment}/${assignmentId}`, 'put', {}, {}, payload);
export const deleteAssignment = (assignmentId) => callAPI(`${urls.deleteAssignment}/${assignmentId}`, 'delete');

export const getStudentAssignment = (studentId, assignmentId) =>
  callAPI(`${urls.getStudentAssignment}/student/${studentId}/assignment/${assignmentId}`, 'get');
export const createStudentAssignment = (payload) => callAPI(urls.createStudentAssignment, 'post', {}, {}, payload);
export const submitStudentAssignment = (payload) =>
  callAPI(urls.submitStudentAssignment, 'put', { 'Content-Type': 'multipart/form-data' }, {}, payload);

export const getCourseAssignment = (courseId) => callAPI(`${urls.getCourseAssignment}/${courseId}`, 'get');
