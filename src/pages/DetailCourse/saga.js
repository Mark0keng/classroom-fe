import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { deleteCourse, getCourseAssignment, getCourseByCode, updateCourse } from '@domain/api';
import { DELETE_COURSE, EDIT_COURSE, GET_COURSE_ASSIGNMENT } from './constants';
import { setCourse, setCourseAssignment } from './actions';

function* doGetCourseAssignment({ courseCode, cbFailed }) {
  yield put(setLoading(true));
  try {
    const course = yield call(getCourseByCode, courseCode);
    yield put(setCourse(course.data));
    const response = yield call(getCourseAssignment, course.data.id);
    yield put(setCourseAssignment(response.data));
  } catch (error) {
    cbFailed && cbFailed(error?.response?.data?.output?.payload);
  }
  yield put(setLoading(false));
}

function* doDeleteCourse({ courseId, cbSuccess }) {
  yield put(setLoading(true));
  try {
    yield call(deleteCourse, courseId);
    cbSuccess && cbSuccess();
  } catch (error) {
    /* empty */
  }
  yield put(setLoading(false));
}

function* doEditCourse({ payload, courseId, cbSuccess }) {
  yield put(setLoading(true));
  try {
    yield call(updateCourse, payload, courseId);
    cbSuccess && cbSuccess();
  } catch (error) {
    /* empty */
  }
  yield put(setLoading(false));
}

export default function* detailCourseSaga() {
  yield takeLatest(GET_COURSE_ASSIGNMENT, doGetCourseAssignment);
  yield takeLatest(EDIT_COURSE, doEditCourse);
  yield takeLatest(DELETE_COURSE, doDeleteCourse);
}
