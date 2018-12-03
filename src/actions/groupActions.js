import * as types from '../constants/actionTypes';

export function getUserGroupMembers(userEmail) {
  return {
    type: types.GET_GROUP_MEMBERS_STARTED,
    payload: {
      userEmail
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

export function addGroupMember(userEmail, memberEmail) {
  return {
    type: types.ADD_GROUP_MEMBER_STARTED,
    payload: {
      userEmail,
      memberEmail
    }
  };
}

export function addGroupMemberCompleted(groupMembers) {
  return {
    type: types.ADD_GROUP_MEMBER_COMPLETED,
    payload: {
      groupMembers
    }
  };
}

export function addGroupMemberError(error) {
  return {
    type: types.ADD_GROUP_MEMBER_ERROR,
    payload: {
      error
    }
  };
}

export function removeGroupMember(userEmail, memberEmail) {
  return {
    type: types.REMOVE_GROUP_MEMBER_STARTED,
    payload: {
      userEmail,
      memberEmail
    }
  };
}

export function removeGroupMemberCompleted(groupMembers) {
  return {
    type: types.REMOVE_GROUP_MEMBER_COMPLETED,
    payload: {
      groupMembers
    }
  };
}

export function removeGroupMemberError(error) {
  return {
    type: types.REMOVE_GROUP_MEMBER_ERROR,
    payload: {
      error
    }
  };
}

export function getMutualGroupMembers(userId) {
  return {
    type: types.GET_MUTUAL_GROUP_MEMBERS_STARTED,
    payload: {
      userId
    }
  };
}

export function getMutualGroupMembersCompleted(mutualGroupMembers) {
  return {
    type: types.GET_MUTUAL_GROUP_MEMBERS_COMPLETED,
    payload: {
      mutualGroupMembers
    }
  };
}

export function getMutualGroupMembersError(error) {
  return {
    type: types.GET_MUTUAL_GROUP_MEMBERS_ERROR,
    payload: {
      error
    }
  };
}

export function clearMutualGroupMembers() {
  return {
    type: types.CLEAR_MUTUAL_GROUP_MEMBERS
  };
}
