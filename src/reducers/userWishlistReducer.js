import initialState from './initialState';
import * as types from '../constants/actionTypes';
import toastr from 'toastr';
import clone from '../utils/deepClone';

export default function update(state = initialState.userWishlist, action) {
  switch (action.type) {
    case types.GET_USER_WISHLIST_COMPLETE:
      return clone(action.payload.wishlist);

    case types.GET_USER_WISHLIST_ERROR:
      toastr.error(action.payload.error);
      return state;

    case types.ADD_USER_WISHLIST_ITEM_COMPLETE:
      toastr.success('Item added');
      return clone(action.payload.wishlist);

    case types.ADD_USER_WISHLIST_ITEM_ERROR:
      toastr.error(action.payload.error);
      return state;

    case types.EDIT_USER_WISHLIST_ITEM_COMPLETE:
      toastr.success('Item updated');
      return clone(action.payload.wishlist);

    case types.EDIT_USER_WISHLIST_ITEM_ERROR:
      toastr.error(action.payload.error);
      return state;

    case types.DELETE_USER_WISHLIST_ITEM_COMPLETE:
      toastr.success('Item removed');
      return clone(action.payload.wishlist);

    case types.DELETE_USER_WISHLIST_ITEM_ERROR:
      toastr.error(action.payload.error);
      return state;

    case types.CLEAR_USER_WISHLIST:
      return initialState.userWishlist;

    default:
      return state;
  }
}
