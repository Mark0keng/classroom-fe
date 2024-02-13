import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { setDetailAssignment } from '@pages/DetailAssignment/actions';
import { getAssignmentById, getCourseByCode, updateAssignment } from '@domain/api';
import { EDIT_ASSIGNMENT, GET_ASSIGNMENT } from './constants';

function* doGetAssignment({ assignmentId, cbFailed }) {
  yield put(setLoading(true));
  try {
    const result = yield call(getAssignmentById, assignmentId);
    yield put(setDetailAssignment(result.data));
  } catch (error) {
    if (error?.response?.data?.output?.payload) {
      cbFailed && cbFailed(error.response.data.output.payload);
    }
  }
  yield put(setLoading(false));
}

function* doEditAssignment({ payload, courseCode, assignmentId, cbSuccess, cbFailed }) {
  yield put(setLoading(true));
  try {
    const course = yield call(getCourseByCode, courseCode);
    yield call(updateAssignment, { ...payload, course_id: course.data.id }, assignmentId);
    cbSuccess && cbSuccess();
  } catch (error) {
    if (error?.response?.data?.output?.payload?.message) {
      cbFailed && cbFailed(error.response.data.output.payload.message);
    }
  }
  yield put(setLoading(false));
}

export default function* editAssignmentSaga() {
  yield takeLatest(EDIT_ASSIGNMENT, doEditAssignment);
  yield takeLatest(GET_ASSIGNMENT, doGetAssignment);
}
