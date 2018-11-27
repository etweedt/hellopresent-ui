import * as types from '../constants/actionTypes';

export function getUserClaims(email) {
  return {
    type: types.GET_USER_CLAIMS_STARTED,
    payload: {
      email
    }
  };
}

export function getUserClaimsComplete(claims) {
  return {
    type: types.GET_USER_CLAIMS_COMPLETE,
    payload: {
      claims
    }
  };
}

export function getUserClaimsError(error) {
  return {
    type: types.GET_USER_CLAIMS_ERROR,
    payload: {
      error
    }
  };
}

export function clearUserClaims() {
  return {
    type: types.CLEAR_USER_CLAIMS
  };
}
