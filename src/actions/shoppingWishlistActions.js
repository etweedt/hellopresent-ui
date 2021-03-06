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

export function claimWishlistItem(email, wishlistId, item) {
  return {
    type: types.CLAIM_ITEM_STARTED,
    payload: {
      email,
      wishlistId,
      item
    }
  };
}

export function claimWishlistItemComplete(wishlist) {
  return {
    type: types.CLAIM_ITEM_COMPLETE,
    payload: {
      wishlist
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

export function unclaimWishlistItem(email, wishlistId, item, claimsPage) {
  return {
    type: types.UNCLAIM_ITEM_STARTED,
    payload: {
      email,
      wishlistId,
      item,
      claimsPage
    }
  };
}

export function unclaimWishlistItemComplete(wishlist, claimsPage) {
  return {
    type: types.UNCLAIM_ITEM_COMPLETE,
    payload: {
      wishlist,
      claimsPage
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
