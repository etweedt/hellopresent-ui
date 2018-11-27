import initialState from './initialState';
import * as types from '../constants/actionTypes';
import toastr from 'toastr';

export default function(state = initialState.auth, action) {
  let profile;

  switch (action.type) {
    case types.AUTH_RETRIEVE_PROFILE_COMPLETED:
      profile = action.payload.profile;
      return {
        name: profile.nickname,
        email: profile.name,
        picture: profile.picture
      };

    case types.AUTH_RETRIEVE_PROFILE_ERROR:
      toastr.error(action.payload.error);
      return initialState.auth;

    default:
      return state;
  }
}
