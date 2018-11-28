import * as types from '../constants/actionTypes';

export function getUserGroupMembers(email) {
  return {
    type: types.GET_GROUP_MEMBERS_STARTED,
    payload: {
      email
    }
  };
}

export function getUserGroupMembersCompleted(groupMembers) {
  return {
    type: types.GET_GROUP_MEMBERS_COMPLETED,
    payload: {
      groupMembers
    }
  };
}

export function getUserGroupMembersError(error) {
  return {
    type: types.GET_GROUP_MEMBERS_ERROR,
    payload: {
      error
    }
  };
}

export function clearUserGroupMembers() {
  return {
    type: types.CLEAR_GROUP_MEMBERS
  };
}
