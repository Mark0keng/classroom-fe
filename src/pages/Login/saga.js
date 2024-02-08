import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { login } from '@domain/api';
import { setLogin, setProfile, setToken } from '@containers/Client/actions';
import { jwtDecode } from 'jwt-decode';
import { LOGIN } from './constants';

function* doLogin({ payload, cbSuccess, cbFailed }) {
  yield put(setLoading(true));
  try {
    const { token } = yield call(login, payload);
    const profile = jwtDecode(token);
    yield put(setLogin(true));
    yield put(setToken(token));
    yield put(setProfile(profile));
    cbSuccess && cbSuccess();
  } catch (error) {
    if (error?.response?.data?.output?.payload?.message) {
      cbFailed && cbFailed(error.response.data.output.payload.message);
    }
  }
  yield put(setLoading(false));
}

export default function* loginSaga() {
  yield takeLatest(LOGIN, doLogin);
}
