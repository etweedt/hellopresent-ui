import React from 'react';
import {
  Alert,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';
import PropTypes from 'prop-types';

function SeenContent({notifications, filter, onFilterChanged}) {
  return (
    <>
      <div className='row mb-3 mt-3'>
        <div className='col-sm-12'>
          <Form>
            <InputGroup>
              <Input type='text' value={filter} onChange={onFilterChanged} />
              <InputGroupAddon addonType='append'>
                <InputGroupText>
                  <i className='fa fa-filter' />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Form>
        </div>
      </div>
      <div className='row mb-4'>
        <div className='col-sm'>
          {notifications.map(notification => {
            if (
              notification.message.toLowerCase().includes(filter.toLowerCase())
            ) {
              return (
                <div key={notification.id} className='row'>
                  <div className='col-sm'>
                    <Alert color='info'>
                      <div className='d-flex justify-content-between align-items-center'>
                        <span>{notification.message}</span>
                        <span>
                          {new Date(notification.date).toLocaleString()}
                        </span>
                      </div>
                    </Alert>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
}

SeenContent.propTypes = {
  notifications: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onFilterChanged: PropTypes.func.isRequired
};

export default SeenContent;
