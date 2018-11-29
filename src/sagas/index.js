import {all} from 'redux-saga/effects';
import * as auth from './authSaga';
import * as userWishlist from './userWishlistSaga';
import * as shoppingWishlist from './shoppingWishlistSaga';
import * as claims from './claimSaga';
import * as userInfo from './userInfoSaga';
import * as groupMembers from './groupMembersSaga';

export default function* root() {
  yield all([
    auth.watchAuthProfileRetrieval(),
    userWishlist.watchGetUserWishlist(),
    userWishlist.watchAddUserWishlistItem(),
    userWishlist.watchEditUserWishlistItem(),
    userWishlist.watchDeleteUserWishlistItem(),
    shoppingWishlist.watchGetShoppingWishlist(),
    shoppingWishlist.watchClaimItem(),
    shoppingWishlist.watchUnclaimItem(),
    claims.watchGetClaims(),
    userInfo.watchRetrieveUserInfo(),
    userInfo.watchUpdateUserInfo(),
    groupMembers.watchGetGroupMembers()
  ]);
}
