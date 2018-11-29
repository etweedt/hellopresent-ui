import * as types from '../constants/actionTypes';
import toastr from 'toastr';
import initialState from './initialState';

export default function update(state = initialState.allUsers, action) {
  switch (action.type) {
    case types.GET_ALL_USERS_COMPLETED:
      return action.payload.allUsers;

    case types.GET_GROUP_MEMBERS_ERROR:
      toastr.error(action.payload.error);
      return initialState.allUsers;

    default:
      return state;
  }
}
