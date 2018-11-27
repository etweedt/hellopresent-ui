import * as types from '../constants/actionTypes';

export function getAltWishlists(email) {
  return {
    type: types.GET_ALT_WISHLISTS_STARTED,
    payload: {
      email
    }
  };
}

export function getAltWishlistsComplete(wishlists) {
  return {
    type: types.GET_ALT_WISHLISTS_COMPLETE,
    payload: {
      wishlists
    }
  };
}

export function getAltWishlistsError(error) {
  return {
    type: types.GET_ALT_WISHLISTS_ERROR,
    payload: {
      error
    }
  };
}

export function clearAltWishlists() {
  return {
    type: types.CLEAR_ALT_WISHLISTS
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
