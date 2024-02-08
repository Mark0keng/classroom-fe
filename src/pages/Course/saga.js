import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { getLecturerCourse, getStudentCourse } from '@domain/api';
import { GET_COURSE } from './constants';
import { setCourse } from './actions';

function* getCourse({ userData }) {
  yield put(setLoading(true));
  try {
    if (userData.role === 1) {
      const response = yield call(getStudentCourse, userData.id);
      yield put(setCourse(response.data.course));
    }
    if (userData.role === 2) {
      const response = yield call(getLecturerCourse, userData.id);
      yield put(setCourse(response.data.course));
    }
  } catch (error) {
    console.log(error);
  }
  yield put(setLoading(false));
}

export default function* courseSaga() {
  yield takeLatest(GET_COURSE, getCourse);
}