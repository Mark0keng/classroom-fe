import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { register } from '@domain/api';
import { REGISTER } from './constants';
import { setData, setStep } from './actions';

function* doRegister({ payload, cbSuccess, cbFailed }) {
  yield put(setLoading(true));
  try {
    yield call(register, payload);
    yield put(setStep(1));
    yield put(setData({}));
    cbSuccess && cbSuccess();
  } catch (error) {
    console.log(error);
    if (error?.response?.data?.output?.payload?.message) {
      cbFailed && cbFailed(error.response.data.output.payload.message);
    }
  }
  yield put(setLoading(false));
}

export default function* registerSaga() {
  yield takeLatest(REGISTER, doRegister);
}
