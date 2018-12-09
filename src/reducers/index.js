import {combineReducers} from 'redux';
import loading from './loadingReducer';
import auth from './authReducer';
import userWishlist from './userWishlistReducer';
import shoppingWishlist from './shoppingWishlistReducer';
import claims from './claimsReducer';
import userInfo from './userInfoReducer';
import groupMembers from './groupMembersReducer';
import allUsers from './allUsersReducer';
import searchResults from './searchResultsReducer';
import mutualGroupMembers from './mutualGroupMembersReducer';
import notifications from './notificationReducer';

export default combineReducers({
  loading,
  auth,
  userWishlist,
  shoppingWishlist,
  claims,
  userInfo,
  groupMembers,
  allUsers,
  searchResults,
  mutualGroupMembers,
  notifications
});
