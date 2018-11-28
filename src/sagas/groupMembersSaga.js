import {put, call, takeEvery} from 'redux-saga/effects';
import Api from '../apis/helloPresentApi';
import * as types from '../constants/actionTypes';
import * as actions from '../actions/groupMemberActions';

export function* getGroupMembers(action) {
  try {
    const groupMembers = yield call(
      Api.getUserGroupMembers,
      action.payload.email
    );
    yield put(actions.getUserGroupMembersCompleted(groupMembers.members));
  } catch (e) {
    yield put(actions.getUserGroupMembersError(e));
  }
}

export function* watchGetGroupMembers() {
  yield takeEvery(types.GET_GROUP_MEMBERS_STARTED, getGroupMembers);
}
