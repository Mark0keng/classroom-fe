import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { createCourse } from '@domain/api';
import { CREATE_COURSE } from './constants';

function* doCreateCourse({ payload, cbSuccess, cbFailed }) {
  yield put(setLoading(true));
  try {
    yield call(createCourse, payload);
    cbSuccess && cbSuccess();
  } catch (error) {
    if (error?.response?.data?.output?.payload?.message) {
      cbFailed && cbFailed(error.response.data.output.payload.message);
    }
  }
  yield put(setLoading(false));
}

export default function* createCourseSaga() {
  yield takeLatest(CREATE_COURSE, doCreateCourse);
}
