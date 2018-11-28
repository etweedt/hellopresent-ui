import {put, call, takeEvery} from 'redux-saga/effects';
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
    const wishlist = {
      email: action.payload.email,
      items: action.payload.wishlist
    };

    wishlist.items.push(action.payload.item);

    const updatedWishlist = yield call(
      Api.updateUsersWishlist,
      action.payload.email,
      wishlist
    );
    yield put(actions.addItemToUserWishlistComplete(updatedWishlist.items));
  } catch (e) {
    yield put(actions.addItemToUserWishlistError(e));
  }
}

export function* removeItemFromUserWishlist(action) {
  try {
    const wishlist = {
      email: action.payload.email,
      items: action.payload.wishlist
    };
    const found = wishlist.items.find(item => {
      return item._id === action.payload.itemId;
    });
    wishlist.items.splice(wishlist.items.indexOf(found), 1);

    const updatedWishlist = yield call(
      Api.updateUsersWishlist,
      wishlist.email,
      wishlist
    );
    yield put(
      actions.deleteItemFromUserWishlistComplete(updatedWishlist.items)
    );
  } catch (e) {
    yield put(actions.deleteItemFromUserWishlistError(e));
  }
}

export function* editUserWishlistItem(action) {
  try {
    const {item} = action.payload;
    const wishlist = {
      email: action.payload.email,
      items: action.payload.wishlist
    };
    const found = wishlist.items.find(i => {
      return i._id === item._id;
    });

    found.name = item.name;
    found.description = item.description;
    found.url = item.url;
    found.notes = item.notes;
    found.priceTier = item.priceTier;
    found.claimedBy = item.claimedBy;

    const updatedWishlist = yield call(
      Api.updateUsersWishlist,
      wishlist.email,
      wishlist
    );

    yield put(actions.updateUserWishlistItemComplete(updatedWishlist.items));
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
