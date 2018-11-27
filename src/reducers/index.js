import {combineReducers} from 'redux';
import auth from './authReducer';
import userWishlist from './userWishlistReducer';
import shoppingWishlists from './shoppingWishlistReducer';
import claims from './claimsReducer';
import userInfo from './userInfoReducer';

export default combineReducers({
  auth,
  userWishlist,
  shoppingWishlists,
  claims,
  userInfo
});
