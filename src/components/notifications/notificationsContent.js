import React from 'react';
import PropTypes from 'prop-types';
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import UnseenContent from './notificationsUnseenContent';
import SeenContent from './notificationsSeenContent';

const notificationsContent = ({
  notifications,
  onMarkSeen,
  onToggleTab,
  activeTab,
  filter,
  onFilterChanged
}) => {
  return (
    <>
      <div className='row mb-4'>
        <div className='col-sm'>
          <h1>
            <i className='fa fa-bell' /> Notifications
          </h1>
        </div>
      </div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={activeTab === 1 ? 'clickable active' : 'clickable'}
            onClick={() => onToggleTab(false, 1)}>
            New
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === 2 ? 'clickable active' : 'clickable'}
            onClick={() => onToggleTab(true, 2)}>
            All
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId={1}>
          <UnseenContent
            notifications={notifications}
            onMarkSeen={onMarkSeen}
          />
        </TabPane>
        <TabPane tabId={2}>
          <SeenContent notifications={notifications} filter={filter} onFilterChanged={onFilterChanged} />
        </TabPane>
      </TabContent>
    </>
  );
};

notificationsContent.propTypes = {
  notifications: PropTypes.array.isRequired,
  onMarkSeen: PropTypes.func.isRequired,
  onToggleTab: PropTypes.func.isRequired,
  activeTab: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  onFilterChanged: PropTypes.func.isRequired
};

export default notificationsContent;
