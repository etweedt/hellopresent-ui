import initialState from './initialState';
import * as types from '../constants/actionTypes';
import clone from '../utils/deepClone';
import toastr from 'toastr';

export default function update(state = initialState.claims, action) {
  switch (action.type) {
    case types.GET_CLAIMS_COMPLETED:
      return clone(action.payload.claims);

    case types.GET_CLAIMS_ERROR:
      toastr.error(action.payload.error);
      return initialState.claims;

    case types.CLEAR_CLAIMS:
      return initialState.claims;

    default:
      return state;
  }
}
