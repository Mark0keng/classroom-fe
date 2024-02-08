import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { joinCourse } from '@domain/api';
import { JOIN_COURSE } from './constants';

function* doJoinCourse({ payload, cbSuccess, cbFailed }) {
  yield put(setLoading(true));
  try {
    yield call(joinCourse, payload);
    cbSuccess && cbSuccess();
  } catch (error) {
    console.log(error.response);
    if(error?.response?.data?.message) {
      cbFailed && cbFailed(error.response.data.message);
    }
    if (error?.response?.data?.output?.payload?.message) {
      cbFailed && cbFailed(error.response.data.output.payload.message);
    }
  }
  yield put(setLoading(false));
}

export default function* joinCourseSaga() {
  yield takeLatest(JOIN_COURSE, doJoinCourse);
}
