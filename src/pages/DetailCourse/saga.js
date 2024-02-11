import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { getCourseAssignment, getCourseByCode } from '@domain/api';
import { GET_ASSIGNMENT } from './constants';
import { setAssignment } from './actions';

function* doGetAssignment({ courseCode, cbFailed }) {
  yield put(setLoading(true));
  try {
    const course = yield call(getCourseByCode, courseCode);
    const response = yield call(getCourseAssignment, course.data.id);
    yield put(setAssignment(response.data));
  } catch (error) {
    console.log(error);
  }
  yield put(setLoading(false));
}

export default function* detailCourseSaga() {
  yield takeLatest(GET_ASSIGNMENT, doGetAssignment);
}
