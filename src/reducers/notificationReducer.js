import initialState from './initialState';
import * as types from '../constants/actionTypes';
import toastr from 'toastr';
import clone from '../utils/deepClone';

export default function update(state = initialState.notifications, action) {
  let found;
  let cloned;

  switch (action.type) {
    case types.GET_NOTIFICATIONS_COMPLETED:
      return clone(action.payload.notifications);

    case types.MARK_NOTIFICATION_AS_READ_COMPLETED:
      cloned = clone(state);
      found = cloned.find(note => {
        return note.id === action.payload.notification.id;
      });

      if (found) {
        cloned.splice(cloned.indexOf(found), 1);
      }

      return cloned;

    case types.GET_NOTIFICATIONS_ERROR:
    case types.MARK_NOTIFICATION_AS_READ_ERROR:
      toastr.error(action.payload.error);
      return state;

    default:
      return state;
  }
}
