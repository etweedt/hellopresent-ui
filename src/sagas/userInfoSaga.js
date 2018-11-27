import {put, call, takeEvery} from 'redux-saga/effects';
import Api from '../apis/helloPresentApi';
import * as types from '../constants/actionTypes';
import * as userInfoActions from '../actions/userInfoActions';

export function* retrieveUserInfo(action) {
  try {
    const userInfo = yield call(Api.getUserInfo, action.payload.email);
    yield put(userInfoActions.getUserInfoCompleted(userInfo));
  } catch (e) {
    yield put(userInfoActions.getUserInfoError(e));
  }
}

export function* updateUserInfo(action) {
  try {
    const userInfo = yield call(
      Api.updateUserInfo,
      action.payload.email,
      action.payload.userInfo
    );
    yield put(userInfoActions.updateUserInfoCompleted(userInfo));
  } catch (e) {
    yield put(userInfoActions.updateUserInfoError(e));
  }
}

export function* watchRetrieveUserInfo() {
  yield takeEvery(types.GET_USER_INFO_STARTED, retrieveUserInfo);
}

export function* watchUpdateUserInfo() {
  yield takeEvery(types.UPDATE_USER_INFO_STARTED, updateUserInfo);
}
