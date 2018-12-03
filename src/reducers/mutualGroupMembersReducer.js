import initialState from './initialState';
import * as types from '../constants/actionTypes';
import toastr from 'toastr';
import clone from '../utils/deepClone';

export default function update(
  state = initialState.mutualGroupMembers,
  action
) {
  switch (action.type) {
    case types.GET_MUTUAL_GROUP_MEMBERS_COMPLETED:
      return clone(action.payload.mutualGroupMembers);

    case types.GET_MUTUAL_GROUP_MEMBERS_ERROR:
      toastr.error(action.payload.error);
      return clone(initialState.mutualGroupMembers);

    default:
      return state;
  }
}
