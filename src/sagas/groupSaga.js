import {put, call, takeEvery} from 'redux-saga/effects';
import Api from '../apis/helloPresentApi';
import * as types from '../constants/actionTypes';
import * as actions from '../actions/groupActions';

export function* getUserGroupMembers(action) {
  try {
    const groupMembers = yield call(
      Api.getUserGroupMembers,
      action.payload.userEmail
    );
    yield put(actions.getUserGroupMembersCompleted(groupMembers.members));
  } catch (e) {
    yield put(actions.getUserGroupMembersError(e));
  }
}

export function* addMemberToUserGroup(action) {
  try {
    const groupMembers = yield call(
      Api.addMemberToUserGroup,
      action.payload.userEmail,
      action.payload.memberEmail
    );
    yield put(actions.addGroupMemberCompleted(groupMembers.members));
  } catch (e) {
    yield put(actions.addGroupMemberError(e));
  }
}

export function* removeMemberFromUserGroup(action) {
  try {
    const groupMembers = yield call(
      Api.addMemberToUserGroup,
      action.payload.userEmail,
      action.payload.memberEmail
    );
    yield put(actions.removeGroupMemberCompleted(groupMembers.members));
  } catch (e) {
    yield put(actions.removeGroupMemberError(e));
  }
}

export function* watchGetGroupMembers() {
  yield takeEvery(types.GET_GROUP_MEMBERS_STARTED, getUserGroupMembers);
}

export function* watchAddMemberToUserGroup() {
  yield takeEvery(types.ADD_GROUP_MEMBER_STARTED, addMemberToUserGroup);
}

export function* watchRemoveMemberFromUserGroup() {
  yield takeEvery(types.REMOVE_GROUP_MEMBER_STARTED, removeMemberFromUserGroup);
}
