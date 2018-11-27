import {put, call, takeEvery} from 'redux-saga/effects';
import Api from '../apis/wishlistApi';
import * as types from '../constants/actionTypes';
import * as actions from '../actions/shoppingWishlistActions';

export function* getShoppingWishlists(action) {
  try {
    const wishlists = yield call(Api.getNonUserWishlists, action.payload.email);
    yield put(actions.getAltWishlistsComplete(wishlists));
  } catch (e) {
    yield put(actions.getAltWishlistsError(e));
  }
}

export function* claimItem(action) {
  try {
    const item = yield call(
      Api.claimItem,
      action.payload.email,
      action.payload.item,
      action.payload.itemOwner
    );
    yield put(
      actions.claimWishlistItemComplete(item, action.payload.itemOwner)
    );
  } catch (e) {
    yield put(actions.claimWishlistItemError(e));
  }
}

export function* unclaimItem(action) {
  try {
    const item = yield call(
      Api.unclaimItem,
      action.payload.email,
      action.payload.item,
      action.payload.itemOwner
    );
    yield put(
      actions.unclaimWishlistItemComplete(item, action.payload.itemOwner)
    );
  } catch (e) {
    yield put(actions.unclaimWishlistItemError(e));
  }
}

export function* watchGetShoppingWishlists() {
  yield takeEvery(types.GET_ALT_WISHLISTS_STARTED, getShoppingWishlists);
}

export function* watchClaimItem() {
  yield takeEvery(types.CLAIM_ITEM_STARTED, claimItem);
}

export function* watchUnclaimItem() {
  yield takeEvery(types.UNCLAIM_ITEM_STARTED, unclaimItem);
}
