import {put, call, takeEvery} from 'redux-saga/effects';
import Api from '../apis/helloPresentApi';
import * as types from '../constants/actionTypes';
import * as notificationActions from '../actions/notificationActions';

export function* getNotifications(action) {
  try {
    const notifications = yield call(
      Api.getNotifications,
      action.payload.userEmail
    );
    yield put(
      notificationActions.getNotificationsCompleted(notifications.notifications)
    );
  } catch (e) {
    yield put(notificationActions.getNotificationsError(e));
  }
}

export function* markNotificationAsRead(action) {
  try {
    const notification = yield call(
      Api.markNotificationAsRead,
      action.payload.notificationId
    );
    yield put(
      notificationActions.markNotificationAsReadCompleted(notification)
    );
  } catch (e) {
    yield put(notificationActions.markNotificationAsReadError(e));
  }
}

export function* watchGetNotifications() {
  yield takeEvery(types.GET_NOTIFICATIONS_STARTED, getNotifications);
}

export function* watchMarkNotificationAsRead() {
  yield takeEvery(
    types.MARK_NOTIFICATION_AS_READ_STARTED,
    markNotificationAsRead
  );
}
