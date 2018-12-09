import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'reactstrap';

const notificationsContent = ({notifications, onMarkSeen}) => {
  return (
    <Fragment>
      <div className="row mb-4">
        <div className="col-sm">
          <h1>
            <i className="fa fa-bell" /> Notifications
          </h1>
        </div>
      </div>
      {notifications.map(notification => {
        return (
          <div key={notification.id} className="row">
            <div className="col-sm">
              <Alert color="info" toggle={() => onMarkSeen(notification)}>
                <div className="d-flex justify-content-between align-items-center">
                  <span>{notification.message}</span>
                  <span>{new Date(notification.date).toLocaleString()}</span>
                </div>
              </Alert>
            </div>
          </div>
        );
      })}
      {notifications.length === 0 && (
        <div className="row">
          <div className="col-sm">
            <p>You have no new notifications!</p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

notificationsContent.propTypes = {
  notifications: PropTypes.array.isRequired,
  onMarkSeen: PropTypes.func.isRequired
};

export default notificationsContent;
