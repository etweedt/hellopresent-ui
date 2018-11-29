import initialState from './initialState';
import * as types from '../constants/actionTypes';
import clone from '../utils/deepClone';
import toastr from 'toastr';

export default function update(state = initialState.shoppingWishlist, action) {
  switch (action.type) {
    case types.GET_SHOPPING_WISHLIST_COMPLETED:
    case types.CLAIM_ITEM_COMPLETE:
    case types.UNCLAIM_ITEM_COMPLETE:
      return clone(action.payload.wishlist);

    case types.CLEAR_SHOPPING_WISHLIST:
      return initialState.shoppingWishlist;

    case types.GET_SHOPPING_WISHLIST_ERROR:
    case types.CLAIM_ITEM_ERROR:
    case types.UNCLAIM_ITEM_ERROR:
      toastr.error(action.payload.error);
      return initialState.shoppingWishlist;

    default:
      return state;
  }
}
