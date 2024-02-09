import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { getCourseMember, getLecturerCourse, getStudentCourse } from '@domain/api';
import { GET_COURSE, GET_STUDENT } from './constants';
import { setCourse } from './actions';

function* getLecturer({ userData }) {
  yield put(setLoading(true));
  try {
    const response = yield call(getLec, userData.id);
    yield put(setCourse(response.data));
  } catch (error) {
    console.log(error);
  }
  yield put(setLoading(false));
}

function* getStudent({ payload }) {
  yield put(setLoading(true));
  try {
    const response = yield call(getCourseMember, payload);
    yield put(setCourse(response.data));
  } catch (error) {
    console.log(error);
  }
  yield put(setLoading(false));
}

export default function* memberCourseSaga() {
  yield takeLatest(GET_LECTURER, getLecturer);
  yield takeLatest(GET_STUDENT, getStudent);
}
