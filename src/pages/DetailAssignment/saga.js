import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { deleteAssignment, getAssignmentById, getStudentAssignment, submitStudentAssignment } from '@domain/api';
import { DELETE_ASSIGNMENT, GET_DETAIL_ASSIGNMENT, SUBMIT_ASSIGNMENT } from './constants';
import { setDetailAssignment, setFileSubmit } from './actions';

function* doGetDetailAssignment({ dataUser, assignmentId, cbFailed }) {
  yield put(setLoading(true));
  try {
    const response = yield call(getAssignmentById, assignmentId);

    if (dataUser.role === 1) {
      const fileSubmit = yield call(getStudentAssignment, dataUser.studentId, assignmentId);
      yield put(setDetailAssignment(response.data));
      yield put(setFileSubmit(fileSubmit.data.fileSubmit));
    } else {
      yield put(setDetailAssignment(response.data));
    }
  } catch (error) {
    if (error?.response?.data?.output?.payload) {
      cbFailed && cbFailed(error.response.data.output.payload);
    }
  }
  yield put(setLoading(false));
}

function* doSubmitAssignment({ payload, cbFailed }) {
  yield put(setLoading(true));
  try {
    yield call(submitStudentAssignment, payload);
  } catch (error) {
    if (error?.response?.data?.output?.payload) {
      cbFailed && cbFailed(error.response.data.output.payload);
    }
  }
  yield put(setLoading(false));
}

function* doDeleteAssignment({ assignmentId, cbSuccess }) {
  yield put(setLoading(true));
  try {
    yield call(deleteAssignment, assignmentId);
    cbSuccess && cbSuccess();
  } catch (error) {
    // if (error?.response?.data?.output?.payload) {
    //   cbFailed && cbFailed(error.response.data.output.payload);
    // }
  }
  yield put(setLoading(false));
}

export default function* detailAssignmentSaga() {
  yield takeLatest(GET_DETAIL_ASSIGNMENT, doGetDetailAssignment);
  yield takeLatest(SUBMIT_ASSIGNMENT, doSubmitAssignment);
  yield takeLatest(DELETE_ASSIGNMENT, doDeleteAssignment);
}
