import initialState from './initialState';
import * as types from '../constants/actionTypes';
import clone from '../utils/deepClone';
import toastr from 'toastr';

export default function update(state = initialState.claims, action) {
  let cloned;
  let foundList;
  let foundItem;

  switch (action.type) {
    case types.GET_USER_CLAIMS_COMPLETE:
      return clone(action.payload.claims);

    case types.GET_USER_CLAIMS_ERROR:
      toastr.error(action.payload.error);
      return state;

    case types.UNCLAIM_ITEM_COMPLETE:
      if (state.length > 0) {
        cloned = clone(state);
        foundList = cloned.find(l => {
          return l.email === action.payload.itemOwner;
        });
        foundItem = foundList.items.find(i => {
          return i.name === action.payload.item.name;
        });
        foundList.items.splice(foundList.items.indexOf(foundItem), 1);

        return cloned;
      } else {
        return state;
      }

    case types.CLEAR_USER_CLAIMS:
      return initialState.claims;

    default:
      return state;
  }
}
