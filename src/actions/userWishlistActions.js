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

export function addItemToUserWishlist(email, wishlist, item) {
  return {
    type: types.ADD_USER_WISHLIST_ITEM_STARTED,
    payload: {
      email,
      wishlist,
      item
    }
  };
}

export function addItemToUserWishlistComplete(wishlist) {
  return {
    type: types.ADD_USER_WISHLIST_ITEM_COMPLETE,
    payload: {
      wishlist
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

export function deleteItemFromUserWishlist(email, wishlist, item) {
  return {
    type: types.DELETE_USER_WISHLIST_ITEM_STARTED,
    payload: {
      email,
      wishlist,
      item
    }
  };
}

export function deleteItemFromUserWishlistComplete(wishlist) {
  return {
    type: types.DELETE_USER_WISHLIST_ITEM_COMPLETE,
    payload: {
      wishlist
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

export function updateUserWishlistItem(email, wishlist, item) {
  return {
    type: types.EDIT_USER_WISHLIST_ITEM_STARTED,
    payload: {
      email,
      wishlist,
      item
    }
  };
}

export function updateUserWishlistItemComplete(wishlist) {
  return {
    type: types.EDIT_USER_WISHLIST_ITEM_COMPLETE,
    payload: {
      wishlist
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
