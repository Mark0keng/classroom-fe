import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  ping: 'ping.json',
  login: 'login',
  register: 'register',
  createCourse: 'course/create',
  joinCourse: 'student-course/join',
  getStudentCourse: 'student',
  getLecturerCourse: 'lecturer',
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
export const getStudentCourse = (studentId) => callAPI(`${urls.getStudentCourse}/${studentId}/get-course`, 'get');
export const getLecturerCourse = (lecturerId) => callAPI(`${urls.getLecturerCourse}/${lecturerId}/get-course`, 'get');
