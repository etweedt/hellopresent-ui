import initialState from './initialState';
import * as types from '../constants/actionTypes';
import toastr from 'toastr';
import clone from '../utils/deepClone';

export default function update(state = initialState.searchResults, action) {
  switch (action.type) {
    case types.GET_MEMBER_SEARCH_RESULTS_COMPLETED:
      return clone(action.payload.searchResults);

    case types.GET_MEMBER_SEARCH_RESULTS_ERROR:
      toastr.error(action.payload.error);
      return initialState.searchResults;

    case types.CLEAR_MEMBER_SEARCH_RESULTS:
      return initialState.searchResults;

    default:
      return state;
  }
}
