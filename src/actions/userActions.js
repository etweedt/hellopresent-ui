import * as types from '../constants/actionTypes';

export function getAllUsers() {
  return {
    type: types.GET_ALL_USERS_STARTED
  };
}

export function getAllUsersCompleted(allUsers) {
  return {
    type: types.GET_ALL_USERS_COMPLETED,
    payload: {
      allUsers
    }
  };
}

export function getAllUsersError(error) {
  return {
    type: types.GET_ALL_USERS_ERROR,
    payload: {
      error
    }
  };
}

export function clearAllUsers() {
  return {
    type: types.CLEAR_ALL_USERS
  };
}
