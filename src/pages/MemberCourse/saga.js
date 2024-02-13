import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { deleteCourseMember, getCourseByCode, getCourseMember } from '@domain/api';
import { DELETE_MEMBER, GET_MEMBER } from './constants';
import { setMember } from './actions';

function* doGetMember({ courseCode, cbFailed }) {
  yield put(setLoading(true));
  try {
    const course = yield call(getCourseByCode, courseCode);
    const response = yield call(getCourseMember, course?.data?.id);
    yield put(setMember({ lecturer: response.data.lecturer, students: response.data.students }));
  } catch (error) {
    if (error?.response?.data?.output?.payload) {
      cbFailed && cbFailed(error.response.data.output.payload);
    }
  }
  yield put(setLoading(false));
}

function* doDeleteMember({ studentId, courseCode, cbFailed }) {
  yield put(setLoading(true));
  try {
    const course = yield call(getCourseByCode, courseCode);
    yield call(deleteCourseMember, studentId, course.data.id);

    const response = yield call(getCourseMember, course?.data?.id);
    yield put(setMember({ lecturer: response.data.lecturer, students: response.data.students }));
  } catch (error) {
    if (error?.response?.data?.output?.payload?.message) {
      cbFailed && cbFailed(error.response.data.output.payload.message);
    }
  }
  yield put(setLoading(false));
}

export default function* memberCourseSaga() {
  yield takeLatest(GET_MEMBER, doGetMember);
  yield takeLatest(DELETE_MEMBER, doDeleteMember);
}
