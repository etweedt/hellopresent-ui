import * as types from '../constants/actionTypes';

export function getShoppingWishlist(email) {
  return {
    type: types.GET_SHOPPING_WISHLIST_STARTED,
    payload: {
      email
    }
  };
}

export function getShoppingWishlistCompleted(wishlist) {
  return {
    type: types.GET_SHOPPING_WISHLIST_COMPLETED,
    payload: {
      wishlist
    }
  };
}

export function getShoppingWishlistError(error) {
  return {
    type: types.GET_SHOPPING_WISHLIST_ERROR,
    payload: {
      error
    }
  };
}

export function clearShoppingWishlist() {
  return {
    type: types.CLEAR_SHOPPING_WISHLIST
  };
}

export function claimWishlistItem(email, item, itemOwner) {
  return {
    type: types.CLAIM_ITEM_STARTED,
    payload: {
      email,
      item,
      itemOwner
    }
  };
}

export function claimWishlistItemComplete(item, itemOwner) {
  return {
    type: types.CLAIM_ITEM_COMPLETE,
    payload: {
      item,
      itemOwner
    }
  };
}

export function claimWishlistItemError(error) {
  return {
    type: types.CLAIM_ITEM_ERROR,
    payload: {
      error
    }
  };
}

export function unclaimWishlistItem(email, item, itemOwner) {
  return {
    type: types.UNCLAIM_ITEM_STARTED,
    payload: {
      email,
      item,
      itemOwner
    }
  };
}

export function unclaimWishlistItemComplete(item, itemOwner) {
  return {
    type: types.UNCLAIM_ITEM_COMPLETE,
    payload: {
      item,
      itemOwner
    }
  };
}

export function unclaimWishlistItemError(error) {
  return {
    type: types.UNCLAIM_ITEM_ERROR,
    payload: {
      error
    }
  };
}
