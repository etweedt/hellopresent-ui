import initialState from './initialState';
import * as types from '../constants/actionTypes';
import clone from '../utils/deepClone';
import toastr from 'toastr';

export default function update(state = initialState.shoppingWishlists, action) {
  let cloned;
  let found;
  let item;

  switch (action.type) {
    case types.GET_ALT_WISHLISTS_COMPLETE:
      return clone(action.payload.wishlists);

    case types.GET_ALT_WISHLISTS_ERROR:
      toastr.error(action.payload.error);
      return state;

    case types.CLEAR_ALT_WISHLISTS:
      return initialState.shoppingWishlists;

    case types.CLAIM_ITEM_COMPLETE:
      cloned = clone(state);
      found = cloned.find(l => {
        return l.email === action.payload.itemOwner;
      });
      item = found.items.find(i => {
        return i.name === action.payload.item.name;
      });
      item.claimedBy = action.payload.item.claimedBy;

      toastr.success('Claimed item');
      return cloned;

    case types.CLAIM_ITEM_ERROR:
      toastr.error(action.payload.error);
      return state;

    case types.UNCLAIM_ITEM_COMPLETE:
      if (state.length > 0) {
        cloned = clone(state);
        found = cloned.find(l => {
          return l.email === action.payload.itemOwner;
        });
        item = found.items.find(i => {
          return i.name === action.payload.item.name;
        });
        item.claimedBy = action.payload.item.claimedBy;

        toastr.info('Unclaimed item');
        return cloned;
      } else {
        return state;
      }

    case types.UNCLAIM_ITEM_ERROR:
      toastr.error(action.payload.error);
      return state;

    default:
      return state;
  }
}
