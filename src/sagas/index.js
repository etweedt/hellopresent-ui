import {all} from 'redux-saga/effects';
import * as auth from './authSaga';
import * as userWishlist from './userWishlistSaga';
import * as shoppingWishlists from './shoppingWishlistSaga';
import * as claims from './claimSaga';

export default function* root() {
  yield all([
    auth.watchAuthProfileRetrieval(),
    userWishlist.watchGetUserWishlist(),
    userWishlist.watchAddUserWishlistItem(),
    userWishlist.watchEditUserWishlistItem(),
    userWishlist.watchDeleteUserWishlistItem(),
    shoppingWishlists.watchGetShoppingWishlists(),
    shoppingWishlists.watchClaimItem(),
    shoppingWishlists.watchUnclaimItem(),
    claims.watchGetClaims()
  ]);
}
