import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import MemberCard from './memberCard';
import AddMembers from './addMembers';
import MutualMembers from './mutualGroupMembers';

const groupContent = ({
  groupMembers,
  mutualGroupMembers,
  activeTab,
  onSwitchTab,
  onAddMember,
  onRemoveMember
}) => {
  return (
    <Fragment>
      <div className="row mb-4">
        <div className="col-sm">
          <h1>
            <i className="fa fa-group" /> My Group
          </h1>
          <p>Friends or family who you would like to shop for</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <Nav tabs>
            <NavItem className="clickable">
              <NavLink
                className={activeTab === 'members' ? 'active' : ''}
                onClick={() => onSwitchTab('members')}>
                You Added
              </NavLink>
            </NavItem>
            <NavItem className="clickable">
              <NavLink
                className={activeTab === 'mutual' ? 'active' : ''}
                onClick={() => {
                  onSwitchTab('mutual');
                }}>
                Added You
              </NavLink>
            </NavItem>
            <NavItem className="clickable">
              <NavLink
                className={activeTab === 'add' ? 'active' : ''}
                onClick={() => onSwitchTab('add')}>
                Search
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="members">
              <div className="row mt-4">
                <div className="col-sm">
                  <div className="row">
                    {groupMembers.map(member => {
                      return (
                        <div
                          key={member._id}
                          className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                          <MemberCard
                            member={member}
                            isAdd={false}
                            onRemoveMember={onRemoveMember}
                          />
                        </div>
                      );
                    })}
                    {groupMembers.length === 0 && (
                      <div className="col-sm">
                        <p>You haven't added anyone yet.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tabId="mutual">
              <div className="row mt-4">
                <div className="col-sm">
                  <MutualMembers mutualGroupMembers={mutualGroupMembers} />
                </div>
              </div>
            </TabPane>
            <TabPane tabId="add">
              <div className="row mt-4">
                <div className="col-sm">
                  <AddMembers
                    onAddMember={onAddMember}
                    members={groupMembers}
                    activeTab={activeTab}
                  />
                </div>
              </div>
            </TabPane>
          </TabContent>
        </div>
      </div>
    </Fragment>
  );
};

groupContent.propTypes = {
  groupMembers: PropTypes.array.isRequired,
  mutualGroupMembers: PropTypes.array.isRequired,
  activeTab: PropTypes.string.isRequired,
  onSwitchTab: PropTypes.func.isRequired,
  onAddMember: PropTypes.func.isRequired,
  onRemoveMember: PropTypes.func.isRequired
};

export default groupContent;
