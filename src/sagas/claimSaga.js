import {put, call, takeEvery} from 'redux-saga/effects';
import Api from '../apis/wishlistApi';
import * as types from '../constants/actionTypes';
import * as actions from '../actions/claimActions';

export function* getClaims(action) {
  try {
    const claims = yield call(Api.getUserClaims, action.payload.email);
    yield put(actions.getUserClaimsComplete(claims));
  } catch (e) {
    yield put(actions.getUserClaimsError(e));
  }
}

export function* watchGetClaims() {
  yield takeEvery(types.GET_USER_CLAIMS_STARTED, getClaims);
}
