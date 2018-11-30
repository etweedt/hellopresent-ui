import * as types from '../constants/actionTypes';
import toastr from 'toastr';
import initialState from './initialState';

export default function update(state = initialState.groupMembers, action) {
  switch (action.type) {
    case types.GET_GROUP_MEMBERS_COMPLETED:
      return action.payload.groupMembers;

    case types.REMOVE_GROUP_MEMBER_COMPLETED:
      toastr.info('Member removed from group');
      return action.payload.groupMembers;

    case types.ADD_GROUP_MEMBER_COMPLETED:
      toastr.success('Member added to group');
      return action.payload.groupMembers;

    case types.GET_GROUP_MEMBERS_ERROR:
      toastr.error(action.payload.error);
      return initialState.groupMembers;

    case types.ADD_GROUP_MEMBER_ERROR:
    case types.REMOVE_GROUP_MEMBER_ERROR:
      toastr.error(action.payload.error);
      return state;

    case types.CLEAR_GROUP_MEMBERS:
      return initialState.groupMembers;

    default:
      return state;
  }
}
