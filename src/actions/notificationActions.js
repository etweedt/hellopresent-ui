import * as types from '../constants/actionTypes';

export function getNotifications(userEmail) {
  return {
    type: types.GET_NOTIFICATIONS_STARTED,
    payload: {
      userEmail
    }
  };
}

export function getNotificationsCompleted(notifications) {
  return {
    type: types.GET_NOTIFICATIONS_COMPLETED,
    payload: {
      notifications
    }
  };
}

export function getNotificationsError(error) {
  return {
    type: types.GET_NOTIFICATIONS_ERROR,
    payload: {
      error
    }
  };
}

export function markNotificationAsRead(notificationId) {
  return {
    type: types.MARK_NOTIFICATION_AS_READ_STARTED,
    payload: {
      notificationId
    }
  };
}

export function markNotificationAsReadCompleted(notification) {
  return {
    type: types.MARK_NOTIFICATION_AS_READ_COMPLETED,
    payload: {
      notification
    }
  };
}

export function markNotificationAsReadError(error) {
  return {
    type: types.MARK_NOTIFICATION_AS_READ_ERROR,
    payload: {
      error
    }
  };
}
