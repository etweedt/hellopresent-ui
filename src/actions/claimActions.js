import * as types from '../constants/actionTypes';

export function getClaims(email) {
  return {
    type: types.GET_CLAIMS_STARTED,
    payload: {
      email
    }
  };
}

export function getClaimsComplete(claims) {
  return {
    type: types.GET_CLAIMS_COMPLETED,
    payload: {
      claims
    }
  };
}

export function getClaimsError(error) {
  return {
    type: types.GET_CLAIMS_ERROR,
    payload: {
      error
    }
  };
}

export function clearClaims() {
  return {
    type: types.CLEAR_CLAIMS
  };
}
