import * as types from '../constants/actionTypes';

export function getMemberSearchResults(userId, searchString) {
  return {
    type: types.GET_MEMBER_SEARCH_RESULTS_STARTED,
    payload: {
      userId,
      searchString
    }
  };
}

export function getMemberSearchResultsCompleted(searchResults) {
  return {
    type: types.GET_MEMBER_SEARCH_RESULTS_COMPLETED,
    payload: {
      searchResults
    }
  };
}

export function getMemberSearchResultsError(error) {
  return {
    type: types.GET_MEMBER_SEARCH_RESULTS_ERROR,
    payload: {
      error
    }
  };
}

export function clearMemberSearchResults() {
  return {
    type: types.CLEAR_MEMBER_SEARCH_RESULTS
  };
}
