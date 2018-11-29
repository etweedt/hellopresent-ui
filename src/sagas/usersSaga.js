import {put, call, takeEvery} from 'redux-saga/effects';
import Api from '../apis/helloPresentApi';
import * as types from '../constants/actionTypes';
import * as actions from '../actions/userActions';

export function* getAllUsers() {
  try {
    const allUsers = yield call(Api.getAllUsers);
    yield put(actions.getAllUsersCompleted(allUsers));
  } catch (e) {
    yield put(actions.getAllUsersError(e));
  }
}

export function* watchGetGroupMembers() {
  yield takeEvery(types.GET_ALL_USERS_STARTED, getAllUsers);
}
