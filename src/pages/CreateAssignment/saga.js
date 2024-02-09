import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { CREATE_ASSIGNMENT } from './constants';
import { createAssignment, getCourseByCode } from '@domain/api';

function* doCreateAssignment({ payload, courseCode, cbSuccess, cbFailed }) {
  yield put(setLoading(true));
  try {
    const course = yield call(getCourseByCode, courseCode);
    yield call(createAssignment, { ...payload, course_id: course.data.id });
    cbSuccess && cbSuccess();
  } catch (error) {
    console.log(error);
    if (error?.response?.data?.message) {
      cbFailed && cbFailed(error.response.data.message);
    }
    if (error?.response?.data?.output?.payload?.message) {
      cbFailed && cbFailed(error.response.data.output.payload.message);
    }
  }
  yield put(setLoading(false));
}

export default function* createAssignmentSaga() {
  yield takeLatest(CREATE_ASSIGNMENT, doCreateAssignment);
}
