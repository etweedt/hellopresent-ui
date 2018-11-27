import {put, call, takeEvery} from 'redux-saga/effects';
import api from '../apis/authProfileApi';
import * as types from '../constants/actionTypes';
import * as authActions from '../actions/authActions';

export function* retrieveProfileStart() {
  try {
    const profile = yield call(api.getAuthProfile);
    yield put(authActions.retrieveAuthProfileCompleted(profile));
  } catch (e) {
    yield put(authActions.retrieveAuthProfileError(e));
  }
}

export function* watchAuthProfileRetrieval() {
  yield takeEvery(types.AUTH_RETRIEVE_PROFILE_STARTED, retrieveProfileStart);
}
