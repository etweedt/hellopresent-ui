import {put, call, takeEvery} from 'redux-saga/effects';
import Api from '../apis/helloPresentApi';
import * as types from '../constants/actionTypes';
import * as searchActions from '../actions/searchActions';

export function* searchForMembers(action) {
  try {
    const searchResults = yield call(
      Api.getMemberSearchResults,
      action.payload.userId,
      action.payload.searchString
    );
    yield put(searchActions.getMemberSearchResultsCompleted(searchResults));
  } catch (e) {
    yield put(searchActions.getMemberSearchResultsError(e));
  }
}

export function* watchSearchForMembers() {
  yield takeEvery(types.GET_MEMBER_SEARCH_RESULTS_STARTED, searchForMembers);
}
