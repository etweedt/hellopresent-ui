import * as types from '../constants/actionTypes';
import toastr from 'toastr';
import initialState from './initialState';

export default function update(state = initialState.groupMembers, action) {
  switch (action.type) {
    case types.GET_GROUP_MEMBERS_COMPLETED:
      return action.payload.groupMembers;

    case types.GET_GROUP_MEMBERS_ERROR:
      toastr.error(action.payload.error);
      return initialState.groupMembers;

    default:
      return state;
  }
}
