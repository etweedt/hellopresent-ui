import initialState from './initialState';
import * as types from '../constants/actionTypes';
import toastr from 'toastr';

export default function(state = initialState.userInfo, action) {
  switch (action.type) {
    case types.GET_USER_INFO_COMPLETED:
      return action.payload.userInfo;

    case types.UPDATE_USER_INFO_COMPLETED:
      toastr.success('Profile updated');
      return action.payload.userInfo;

    case types.GET_USER_INFO_ERROR:
    case types.UPDATE_USER_INFO_ERROR:
      toastr.error(action.payload.error);
      return initialState.userInfo;

    default:
      return state;
  }
}
