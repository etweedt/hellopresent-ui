import initialState from './initialState';
import * as types from '../constants/actionTypes';
import toastr from 'toastr';
import clone from '../utils/deepClone';

const findItemInList = (item, list) => {
  const found = list.find(i => {
    return i.name === item.name;
  });

  return found;
};

export default function update(state = initialState.userWishlist, action) {
  let cloned;
  let found;

  switch (action.type) {
    case types.GET_USER_WISHLIST_COMPLETE:
      return clone(action.payload.wishlist);

    case types.GET_USER_WISHLIST_ERROR:
      toastr.error(action.payload.error);
      return state;

    case types.ADD_USER_WISHLIST_ITEM_COMPLETE:
      cloned = clone(state);
      cloned.push(action.payload.item);

      toastr.success('Item added');
      return cloned;

    case types.ADD_USER_WISHLIST_ITEM_ERROR:
      toastr.error(action.payload.error);
      return state;

    case types.EDIT_USER_WISHLIST_ITEM_COMPLETE:
      cloned = clone(state);
      found = findItemInList(action.payload.item, cloned);
      found.description = action.payload.item.description;
      found.url = action.payload.item.url;
      found.notes = action.payload.item.notes;
      found.priceTier = action.payload.item.priceTier;

      toastr.success('Item updated');
      return cloned;

    case types.EDIT_USER_WISHLIST_ITEM_ERROR:
      toastr.error(action.payload.error);
      return state;

    case types.DELETE_USER_WISHLIST_ITEM_COMPLETE:
      cloned = clone(state);
      found = findItemInList(action.payload.item, cloned);
      cloned.splice(cloned.indexOf(found), 1);

      toastr.success('Item removed');
      return cloned;

    case types.DELETE_USER_WISHLIST_ITEM_ERROR:
      toastr.error(action.payload.error);
      return state;

    case types.CLEAR_USER_WISHLIST:
      return initialState.userWishlist;

    default:
      return state;
  }
}
