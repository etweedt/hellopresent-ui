import {put, call, takeEvery} from 'redux-saga/effects';
import MockApi from '../apis/wishlistApi';
import Api from '../apis/helloPresentApi';
import * as types from '../constants/actionTypes';
import * as actions from '../actions/userWishlistActions';

export function* getUserWishlist(action) {
  try {
    const wishlist = yield call(Api.getUsersWishlist, action.payload.email);
    yield put(actions.getUserWishlistComplete(wishlist.items));
  } catch (e) {
    yield put(actions.getUserWishlistError(e));
  }
}

export function* addItemToUserWishlist(action) {
  try {
    const items = yield call(
      MockApi.addItemToUserWishlist,
      action.payload.email,
      action.payload.item
    );
    yield put(actions.addItemToUserWishlistComplete(items));
  } catch (e) {
    yield put(actions.addItemToUserWishlistError(e));
  }
}

export function* removeItemFromUserWishlist(action) {
  try {
    const items = yield call(
      MockApi.deleteUserWishlistItem,
      action.payload.email,
      action.payload.itemName
    );
    yield put(actions.deleteItemFromUserWishlistComplete(items));
  } catch (e) {
    yield put(actions.deleteItemFromUserWishlistError(e));
  }
}

export function* editUserWishlistItem(action) {
  try {
    const items = yield call(
      MockApi.editUserWishlistItem,
      action.payload.email,
      action.payload.item
    );
    yield put(actions.updateUserWishlistItemComplete(items));
  } catch (e) {
    yield put(actions.updateUserWishlistItemError(e));
  }
}

export function* watchGetUserWishlist() {
  yield takeEvery(types.GET_USER_WISHLIST_STARTED, getUserWishlist);
}

export function* watchAddUserWishlistItem() {
  yield takeEvery(types.ADD_USER_WISHLIST_ITEM_STARTED, addItemToUserWishlist);
}

export function* watchEditUserWishlistItem() {
  yield takeEvery(types.EDIT_USER_WISHLIST_ITEM_STARTED, editUserWishlistItem);
}

export function* watchDeleteUserWishlistItem() {
  yield takeEvery(
    types.DELETE_USER_WISHLIST_ITEM_STARTED,
    removeItemFromUserWishlist
  );
}
