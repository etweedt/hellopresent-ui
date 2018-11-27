import initialState from './initialState';
import * as types from '../constants/actionTypes';
import toastr from 'toastr';

export default function(state = initialState.auth, action) {
  let profile;

  switch (action.type) {
    case types.AUTH_RETRIEVE_PROFILE_COMPLETED:
      profile = action.payload.profile;
      return {
        name: profile['https://chrobinson.com/display_name'],
        email: profile['https://chrobinson.com/email'],
        picture: profile['https://github.chrobinson.com/github_photo']
      };

    case types.AUTH_RETRIEVE_PROFILE_ERROR:
      toastr.error(action.payload.error);
      return initialState.auth;

    default:
      return state;
  }
}
