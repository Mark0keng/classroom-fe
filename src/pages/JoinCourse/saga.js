import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { getCourseByCode, joinCourse } from '@domain/api';
import { JOIN_COURSE } from './constants';

function* doJoinCourse({ payload, courseCode, cbSuccess, cbFailed }) {
  yield put(setLoading(true));
  try {
    const course = yield call(getCourseByCode, courseCode);
    yield call(joinCourse, { ...payload, course_id: course.data.id });
    cbSuccess && cbSuccess();
  } catch (error) {
    if (error?.response?.data?.message) {
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
