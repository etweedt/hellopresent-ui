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

  state = {
    showUnseen: false,
    activeTab: 1,
    filter: ''
  };

  componentWillMount() {
    const {auth, getNotifications} = this.props;
    const {showUnseen} = this.state;

    if (auth.email) {
      getNotifications(auth.email, showUnseen);
    }
  }

  componentWillUnmount() {
    const {auth, getNotifications} = this.props;
    getNotifications(auth.email, false);
  }

  componentWillReceiveProps(nextProps) {
    const {auth, getNotifications} = this.props;
    const {showUnseen} = this.state;

    if (auth.email !== nextProps.auth.email && nextProps.auth.email) {
      getNotifications(nextProps.auth.email, showUnseen);
    }
  }

  onMarkSeen = notification => {
    const {markNotificationAsRead} = this.props;

    markNotificationAsRead(notification.id);
  };

  onToggleTab = (showUnseen, activeTab) => {
    const {auth, getNotifications} = this.props;
    getNotifications(auth.email, showUnseen);

    this.setState({
      showUnseen,
      activeTab
    });
  };

  onFilterChanged = event => {
    this.setState({
      filter: event.target.value
    })
  }

  render() {
    const {notifications} = this.props;
    const {activeTab, filter} = this.state;

    return (
      <Content
        notifications={notifications}
        onMarkSeen={this.onMarkSeen}
        onToggleTab={this.onToggleTab}
        activeTab={activeTab}
        filter={filter}
        onFilterChanged={this.onFilterChanged}
      />
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
    getNotifications: (userId, showUnseen) => {
      dispatch(notificationActions.getNotifications(userId, showUnseen));
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
