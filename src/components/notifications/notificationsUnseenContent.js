import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'reactstrap';

function UnseenContent({notifications, onMarkSeen}) {
  return (
    <>
      {notifications.map(notification => {
        return (
          <div key={notification.id} className='row mt-3'>
            <div className='col-sm'>
              <Alert color='info' toggle={() => onMarkSeen(notification)}>
                <div className='d-flex justify-content-between align-items-center'>
                  <span>{notification.message}</span>
                  <span>{new Date(notification.date).toLocaleString()}</span>
                </div>
              </Alert>
            </div>
          </div>
        );
      })}
      {notifications.length === 0 && (
        <div className='row mt-3'>
          <div className='col-sm'>
            <p>You have no new notifications!</p>
          </div>
        </div>
      )}
    </>
  );
}

UnseenContent.propTypes = {
  notifications: PropTypes.array.isRequired,
  onMarkSeen: PropTypes.func.isRequired
};

export default UnseenContent;
