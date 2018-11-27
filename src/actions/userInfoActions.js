import * as types from '../constants/actionTypes';

export function getUserInfo(email) {
  return {
    type: types.GET_USER_INFO_STARTED,
    payload: {
      email
    }
  };
}

export function getUserInfoCompleted(userInfo) {
  return {
    type: types.GET_USER_INFO_COMPLETED,
    payload: {
      userInfo
    }
  };
}

export function getUserInfoError(error) {
  return {
    type: types.GET_USER_INFO_ERROR,
    payload: {
      error
    }
  };
}

export function updateUserInfo(email, userInfo) {
  return {
    type: types.UPDATE_USER_INFO_STARTED,
    payload: {
      email,
      userInfo
    }
  };
}

export function updateUserInfoCompleted(userInfo) {
  return {
    type: types.UPDATE_USER_INFO_COMPLETED,
    payload: {
      userInfo
    }
  };
}

export function updateUserInfoError(error) {
  return {
    type: types.UPDATE_USER_INFO_ERROR,
    payload: {
      error
    }
  };
}

export function clearUserInfo() {
  return {
    type: types.CLEAR_USER_INFO
  };
}
