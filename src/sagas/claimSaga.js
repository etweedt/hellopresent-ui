import {put, call, takeEvery} from 'redux-saga/effects';
import Api from '../apis/helloPresentApi';
import * as types from '../constants/actionTypes';
import * as actions from '../actions/claimActions';

export function* getClaims(action) {
  try {
    const claims = yield call(Api.getUserClaims, action.payload.email);
    yield put(actions.getClaimsComplete(claims));
  } catch (e) {
    yield put(actions.getClaimsError(e));
  }
}

export function* watchGetClaims() {
  yield takeEvery(types.GET_CLAIMS_STARTED, getClaims);
}
