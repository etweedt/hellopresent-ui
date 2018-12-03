import {all} from 'redux-saga/effects';
import * as auth from './authSaga';
import * as userWishlist from './userWishlistSaga';
import * as shoppingWishlist from './shoppingWishlistSaga';
import * as claims from './claimSaga';
import * as userInfo from './userInfoSaga';
import * as group from './groupSaga';
import * as users from './usersSaga';
import * as search from './searchSaga';

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
    group.watchGetGroupMembers(),
    group.watchAddMemberToUserGroup(),
    group.watchRemoveMemberFromUserGroup(),
    group.watchGetMutualGroupMembers(),
    users.watchGetGroupMembers(),
    search.watchSearchForMembers()
  ]);
}
