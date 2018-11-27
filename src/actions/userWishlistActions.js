import * as types from '../constants/actionTypes';

export function getUserWishlist(email) {
  return {
    type: types.GET_USER_WISHLIST_STARTED,
    payload: {
      email
    }
  };
}

export function getUserWishlistComplete(wishlist) {
  return {
    type: types.GET_USER_WISHLIST_COMPLETE,
    payload: {
      wishlist
    }
  };
}

export function getUserWishlistError(error) {
  return {
    type: types.GET_USER_WISHLIST_ERROR,
    payload: {
      error
    }
  };
}

export function clearUserWishlist() {
  return {
    type: types.CLEAR_USER_WISHLIST
  };
}

export function addItemToUserWishlist(email, item) {
  return {
    type: types.ADD_USER_WISHLIST_ITEM_STARTED,
    payload: {
      email,
      item
    }
  };
}

export function addItemToUserWishlistComplete(item) {
  return {
    type: types.ADD_USER_WISHLIST_ITEM_COMPLETE,
    payload: {
      item
    }
  };
}

export function addItemToUserWishlistError(error) {
  return {
    type: types.ADD_USER_WISHLIST_ITEM_ERROR,
    payload: {
      error
    }
  };
}

export function deleteItemFromUserWishlist(email, itemName) {
  return {
    type: types.DELETE_USER_WISHLIST_ITEM_STARTED,
    payload: {
      email,
      itemName
    }
  };
}

export function deleteItemFromUserWishlistComplete(item) {
  return {
    type: types.DELETE_USER_WISHLIST_ITEM_COMPLETE,
    payload: {
      item
    }
  };
}

export function deleteItemFromUserWishlistError(error) {
  return {
    type: types.DELETE_USER_WISHLIST_ITEM_ERROR,
    payload: {
      error
    }
  };
}

export function updateUserWishlistItem(email, item) {
  return {
    type: types.EDIT_USER_WISHLIST_ITEM_STARTED,
    payload: {
      email,
      item
    }
  };
}

export function updateUserWishlistItemComplete(item) {
  return {
    type: types.EDIT_USER_WISHLIST_ITEM_COMPLETE,
    payload: {
      item
    }
  };
}

export function updateUserWishlistItemError(error) {
  return {
    type: types.EDIT_USER_WISHLIST_ITEM_ERROR,
    payload: {
      error
    }
  };
}
