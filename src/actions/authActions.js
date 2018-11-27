import * as types from '../constants/actionTypes';

export function retrieveAuthProfile() {
  return {
    type: types.AUTH_RETRIEVE_PROFILE_STARTED
  };
}

export function retrieveAuthProfileCompleted(profile) {
  return {
    type: types.AUTH_RETRIEVE_PROFILE_COMPLETED,
    payload: {
      profile
    }
  };
}

export function retrieveAuthProfileError(error) {
  return {
    type: types.AUTH_RETRIEVE_PROFILE_ERROR,
    payload: {
      error
    }
  };
}
