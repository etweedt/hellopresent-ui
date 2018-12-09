import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Content from './notificationsContent';
import * as notificationActions from '../../actions/notificationActions';

export class notificationsContainer extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    notifications: PropTypes.array.isRequired,
    getNotifications: PropTypes.func.isRequired,
    markNotificationAsRead: PropTypes.func.isRequired
  };

  componentWillMount() {
    const {auth, getNotifications} = this.props;

    if (auth.email) {
      getNotifications(auth.email);
    }
  }

  componentWillReceiveProps(nextProps) {
    const {auth, getNotifications} = this.props;

    if (auth.email !== nextProps.auth.email && nextProps.auth.email) {
      getNotifications(nextProps.auth.email);
    }
  }

  onMarkSeen = notification => {
    const {markNotificationAsRead} = this.props;

    markNotificationAsRead(notification.id);
  };

  render() {
    const {notifications} = this.props;

    return (
      <Content notifications={notifications} onMarkSeen={this.onMarkSeen} />
    );
  }
}

export const mapStateToProps = state => {
  return {
    auth: state.auth,
    notifications: state.notifications
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getNotifications: userId => {
      dispatch(notificationActions.getNotifications(userId));
    },
    markNotificationAsRead: notificationId => {
      dispatch(notificationActions.markNotificationAsRead(notificationId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(notificationsContainer);
