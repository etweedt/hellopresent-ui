import {combineReducers} from 'redux';
import loading from './loadingReducer';
import auth from './authReducer';
import userWishlist from './userWishlistReducer';
import shoppingWishlist from './shoppingWishlistReducer';
import claims from './claimsReducer';
import userInfo from './userInfoReducer';
import groupMembers from './groupMembersReducer';
import allUsers from './allUsersReducer';

export default combineReducers({
  loading,
  auth,
  userWishlist,
  shoppingWishlist,
  claims,
  userInfo,
  groupMembers,
  allUsers
});
