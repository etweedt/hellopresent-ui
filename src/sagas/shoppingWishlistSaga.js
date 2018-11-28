import {put, call, takeEvery} from 'redux-saga/effects';
import MockApi from '../apis/wishlistApi';
import Api from '../apis/helloPresentApi';
import * as types from '../constants/actionTypes';
import * as actions from '../actions/shoppingWishlistActions';

export function* getShoppingWishlist(action) {
  try {
    const wishlist = yield call(Api.getUsersWishlist, action.payload.email);
    yield put(actions.getShoppingWishlistCompleted(wishlist));
  } catch (e) {
    yield put(actions.getShoppingWishlistError(e));
  }
}

export function* claimItem(action) {
  try {
    const item = yield call(
      MockApi.claimItem,
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
      MockApi.unclaimItem,
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

export function* watchGetShoppingWishlist() {
  yield takeEvery(types.GET_SHOPPING_WISHLIST_STARTED, getShoppingWishlist);
}

// export function* watchClaimItem() {
//   yield takeEvery(types.CLAIM_ITEM_STARTED, claimItem);
// }

// export function* watchUnclaimItem() {
//   yield takeEvery(types.UNCLAIM_ITEM_STARTED, unclaimItem);
// }
